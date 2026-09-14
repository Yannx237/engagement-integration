import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
const read = f => fs.readFileSync(f, 'utf8');
const write = (f, s) => { fs.mkdirSync(path.dirname(f), {recursive:true}); fs.writeFileSync(f,s); };
const parse = s => ts.createSourceFile('file.tsx',s,ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
const tag = n => ts.isJsxElement(n) ? n.openingElement.tagName.getText() : ts.isJsxSelfClosingElement(n) ? n.tagName.getText() : '';
function find(root, predicate) {
  const out=[];
  function visit(n) { if(predicate(n)) out.push(n); ts.forEachChild(n,visit); }
  visit(root); return out;
}
const attr = (n, name) => (n.openingElement ?? n).attributes.properties.find(p => p.name?.getText() === name)?.initializer;
const hasClass = (n, value) => tag(n) && attr(n,'className')?.text?.startsWith(value);
const text = n => n.children.map(c=>c.getText()).join('').trim().replace(/\s+/g,' ').replaceAll('&amp;','&');
const children = n => ({getStart:()=>n.openingElement.end,end:n.closingElement.getStart(),getText:()=>n.getSourceFile().text.slice(n.openingElement.end,n.closingElement.getStart())});
function edit(source, edits) { for(const e of edits.sort((a,b)=>b.start-a.start)) source=source.slice(0,e.start)+e.text+source.slice(e.end); return source; }

function factor({file,name,dataName,typeName,match,fields}) {
  const source=read(file), cards=find(parse(source),match);
  if(cards.length<2) throw Error(`No repeated cards: ${file}`);
  const data=[], firstEdits=[];
  cards.forEach((card,i)=>{
    const values=[];
    for(const [key, definition] of Object.entries(fields)) {
      const node=definition.get(card);
      const value=definition.kind==='jsx' ? `<>${node.getText()}</>` : JSON.stringify(definition.kind==='attribute' ? node.text : text(node));
      values.push(`${key}: ${value}`);
      if(i===0) {
        const range = definition.kind==='text' ? children(node) : node;
        firstEdits.push({start:range.getStart()-card.getStart(),end:range.end-card.getStart(),text:`{item.${key}}`});
      }
    }
    data.push(`{${values.join(',\n')}}`);
  });
  const folder=path.dirname(file), dataFile=`src/redesign/data/${dataName}.tsx`;
  const usesJsx=Object.values(fields).some(f=>f.kind==='jsx');
  write(dataFile,`${usesJsx?"import type { ReactNode } from 'react';\n":''}export interface ${typeName} {\n${Object.entries(fields).map(([key,f])=>`${key}: ${f.kind==='jsx'?'ReactNode':'string'};`).join('\n')}\n}\nexport const ${dataName}: readonly ${typeName}[] = [\n${data.join(',\n')}\n];\n`);
  write(`${folder}/${name}.tsx`,`import type { ${typeName} } from '../../data/${dataName}';\nexport default function ${name}({ item }: { item: ${typeName} }) {\nreturn (\n${edit(cards[0].getText(),firstEdits)}\n);\n}\n`);
  const edits=cards.map((card,i)=>({start:card.getStart(),end:card.end,text:i===0?`{${dataName}.map(item => <${name} key={item.title} item={item} />)}`:''}));
  write(file,`import ${name} from './${name}';\nimport { ${dataName} } from '../../data/${dataName}';\n`+edit(source,edits));
}
const descendants=(node,t)=>find(node,n=>tag(n)===t);
factor({file:'src/redesign/components/home/HomeAreas.tsx',name:'HomeAreaCard',dataName:'homeAreas',typeName:'HomeArea',match:n=>hasClass(n,'bg-white rounded-3xl p-7'),fields:{
  iconClass:{kind:'attribute',get:n=>attr(find(n,x=>hasClass(x,'w-14 h-14'))[0],'className')},
  icon:{kind:'jsx',get:n=>descendants(n,'svg')[0]},
  pillarClass:{kind:'attribute',get:n=>attr(descendants(n,'span')[0],'className')},
  pillar:{kind:'text',get:n=>descendants(n,'span')[0]},
  title:{kind:'text',get:n=>descendants(n,'h3')[0]},
  description:{kind:'jsx',get:n=>children(descendants(n,'p')[0])},
  badgeClass:{kind:'attribute',get:n=>attr(descendants(n,'span')[1],'className')},
  badge:{kind:'text',get:n=>descendants(n,'span')[1]},
  action:{kind:'text',get:n=>descendants(n,'a')[0]},
}});
factor({file:'src/redesign/components/about/AboutTeam.tsx',name:'TeamMemberCard',dataName:'teamMembers',typeName:'TeamMember',match:n=>hasClass(n,'flex flex-col sm:flex-row items-center gap-6 p-6'),fields:{
  image:{kind:'attribute',get:n=>attr(descendants(n,'img')[0],'src')},
  imageAlt:{kind:'attribute',get:n=>attr(descendants(n,'img')[0],'alt')},
  role:{kind:'text',get:n=>descendants(n,'span')[0]},
  title:{kind:'text',get:n=>descendants(n,'h3')[0]},
  description:{kind:'text',get:n=>descendants(n,'p')[0]},
  emailHref:{kind:'attribute',get:n=>attr(descendants(n,'a')[0],'href')},
  email:{kind:'jsx',get:n=>{const a=descendants(n,'a')[0];return a.children.filter(ts.isJsxText).find(c=>c.getText().includes('@'));}},
}});

// The cards already rendered from project data become focused, typed components.
for(const [file,name,variable,match,type] of [
  ['ProjectsByLocation','ProjectCard','project',n=>hasClass(n,'rounded-3xl bg-white border border-stone-200/80 p-8'),'Project'],
  ['ProjectGallery','GalleryPhotoCard','photo',n=>hasClass(n,'group relative rounded-2xl overflow-hidden bg-stone-100'),'ActivityPhoto'],
]) {
  const f=`src/redesign/components/projects/${file}.tsx`,source=read(f),node=find(parse(source),match)[0];
  let card=node.getText().replace(/\s+key=\{(?:idx|i)\}/,'');
  card=card.replace('project.details.map((item, itemIdx)', 'project.details.map((item)').replace('key={itemIdx}','key={item}');
  write(`src/redesign/components/projects/${name}.tsx`,`import type { ${type} } from '../../data/projects';\nexport default function ${name}({ ${variable} }: { ${variable}: ${type} }) { return (${card}); }\n`);
  let updated=edit(source,[{start:node.getStart(),end:node.end,text:`<${name} key={${variable}.${variable==='photo'?'src':'title'}} ${variable}={${variable}} />`}]);
  updated=updated.replace('.map((project, idx)', '.map((project)').replace('.map((photo, i)', '.map((photo)');
  write(f,`import ${name} from './${name}';\n`+updated);
}

// Shared article frame and gallery, preserving each article's individual layout.
for(const file of fs.readdirSync('src/redesign/components/news').filter(f=>f.endsWith('Article.tsx'))) {
  const full=`src/redesign/components/news/${file}`;let source=read(full);
  const ast=parse(source), gallery=find(ast,n=>tag(n)==='div' && n.getText().includes('].map((img, i)') && hasClass(n,'grid grid-cols-'))[0];
  if(gallery) {
    const array=find(gallery,ts.isArrayLiteralExpression)[0];
    const imageWrapper=find(gallery,n=>tag(n)==='div' && attr(n,'key'))[0];
    const usage=`<NewsPhotoGallery photos={${array.getText()}} className=${attr(gallery,'className').getText()} imageClassName=${attr(imageWrapper,'className').getText()} />`;
    source=edit(source,[{start:gallery.getStart(),end:gallery.end,text:usage}]);
    source="import NewsPhotoGallery from './NewsPhotoGallery';\n"+source;
  }
  source=source.replace(/<article className="[^"]+">/, '<NewsArticle>').replace('</article>', '</NewsArticle>');
  write(full,"import NewsArticle from './NewsArticle';\n"+source);
}

// Legal pages share a frame, while their distinct document content remains inline.
for(const file of ['src/pages/Mentions.tsx','src/pages/PrivacyPolicy.tsx']) {
  let source=read(file);const section=find(parse(source),n=>tag(n)==='section')[0];
  const box=section.children.find(n=>tag(n)==='div');
  const replacement=`<LegalContent className=${attr(box,'className').getText()}>${children(box).getText()}</LegalContent>`;
  source=edit(source,[{start:section.getStart(),end:section.end,text:replacement}]);
  write(file,"import LegalContent from '../redesign/components/LegalContent';\n"+source);
}
