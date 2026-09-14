import fs from 'node:fs';
import ts from 'typescript';
const file = 'src/redesign/components/home/HomeProjects.tsx';
const source = fs.readFileSync(file, 'utf8');
const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
const tag = n => ts.isJsxElement(n) ? n.openingElement.tagName.getText() : ts.isJsxSelfClosingElement(n) ? n.tagName.getText() : '';
const attr = (n, name) => (n.openingElement ?? n).attributes.properties.find(p => p.name?.getText() === name)?.initializer;
function find(root, predicate) { const out=[]; function visit(n) { if(predicate(n)) out.push(n); ts.forEachChild(n,visit); } visit(root); return out; }
const children = n => source.slice(n.openingElement.end, n.closingElement.getStart());
const cards = find(ast, n => tag(n)==='div' && attr(n,'className')?.text?.startsWith('flex-shrink-0 w-[285px]'));
const data = cards.map((card, index) => {
  const img = find(card,n=>tag(n)==='img')[0];
  const badges = find(card,n=>tag(n)==='div' && attr(n,'className')?.text?.startsWith('absolute top-3'))[0];
  const body = find(card,n=>tag(n)==='div' && attr(n,'className')?.text==='p-6 flex-1 flex flex-col justify-between')[0];
  const category = find(body,n=>tag(n)==='span')[0];
  const title = find(body,n=>tag(n)==='h3')[0];
  const desc = find(body,n=>tag(n)==='p')[0];
  const footer = find(body,n=>tag(n)==='div' && attr(n,'className')?.text?.startsWith('mt-6 pt-4'))[0];
  return `{
    id: 'featured-${index+1}',
    image: ${JSON.stringify(attr(img,'src').text)},
    imageAlt: ${JSON.stringify(attr(img,'alt').text)},
    badges: (${badges.getText()}),
    category: (<>${children(category)}</>),
    title: (<>${children(title)}</>),
    description: (<>${children(desc)}</>),
    footer: (<>${children(footer)}</>),
  }`;
});
fs.writeFileSync('src/redesign/data/featuredProjects.tsx', `import type { ReactNode } from 'react';
export interface FeaturedProject {
  id: string;
  image: string;
  imageAlt: string;
  badges: ReactNode;
  category: ReactNode;
  title: ReactNode;
  description: ReactNode;
  footer: ReactNode;
}
export const featuredProjects: readonly FeaturedProject[] = [${data.join(',\n')}];\n`);
let result = source;
for (let i=cards.length-1; i>=0; i--) {
  const card=cards[i];
  result=result.slice(0,card.getStart())+(i===0?'{featuredProjects.map(project => <FeaturedProjectCard key={project.id} project={project} />)}':'')+result.slice(card.end);
}
fs.writeFileSync(file, "import FeaturedProjectCard from './FeaturedProjectCard';\nimport { featuredProjects } from '../../data/featuredProjects';\n"+result);
