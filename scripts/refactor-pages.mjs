import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const read = file => fs.readFileSync(file, 'utf8');
const write = (file, text) => {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, text);
};
const parse = (text) => ts.createSourceFile('page.tsx', text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
function elements(text, tag) {
  const nodes = [];
  function visit(node) {
    if (ts.isJsxElement(node) && node.openingElement.tagName.getText() === tag) nodes.push(node);
    else ts.forEachChild(node, visit);
  }
  visit(parse(text));
  return nodes;
}
function replaceRanges(text, edits) {
  for (const { start, end, text: replacement } of edits.sort((a,b) => b.start-a.start)) {
    text = text.slice(0, start) + replacement + text.slice(end);
  }
  return text;
}
function extract(file, tag, definitions, folder, importPath) {
  let source = read(file);
  const nodes = elements(source, tag);
  if (nodes.length !== definitions.length) throw Error(`Unexpected ${tag} count in ${file}: ${nodes.length}`);
  const imports = [];
  const edits = nodes.map((node, i) => {
    const { name, setup = '', imports: dependencies = '', props = '', usage = '' } = definitions[i];
    write(`${folder}/${name}.tsx`, `${dependencies}\nexport default function ${name}(${props}) {\n${setup}\n  return (\n${node.getText()}\n  );\n}\n`);
    imports.push(`import ${name} from '${importPath}/${name}';`);
    return { start: node.getStart(), end: node.end, text: `<${name}${usage ? ' '+usage : ''} />` };
  });
  source = replaceRanges(source, edits);
  write(file, imports.join('\n')+'\n'+source);
}
const base = 'src/redesign';
const home = `${base}/RedesignHome.tsx`;
extract(home, 'section', [
  { name: 'HomeHero' }, { name: 'HomeMission' }, { name: 'HomeAreas' },
  { name: 'HomeProjects', imports: "import { useHorizontalScroll } from '../../hooks/useHorizontalScroll';", setup: 'const { containerRef: projectsContainerRef, scroll: scrollProjects } = useHorizontalScroll(350);' },
  { name: 'HomePartners' }, { name: 'HomeJoinBanner' },
  { name: 'HomeLocations', imports: "import StandorteMap from '../../StandorteMap';" },
  { name: 'HomeContact' },
  { name: 'HomeShop', imports: "import { useHorizontalScroll } from '../../hooks/useHorizontalScroll';", setup: 'const { containerRef: shopContainerRef, scroll: scrollShop } = useHorizontalScroll(320);' },
], `${base}/components/home`, './components/home');
let source = read(home);
source = source.replace(/^import (?:\{ useRef \}|\{ Link \}|StandorteMap).*\r?\n/gm, '');
source = source.slice(0, source.indexOf('  const projectsContainerRef')) + source.slice(source.indexOf('  return ('));
write(home, source);

const about = `${base}/pages/RedesignAboutUs.tsx`;
source = read(about);
const values = source.slice(source.indexOf('  const valuesList'), source.indexOf('  return ('));
write(`${base}/data/about.tsx`, values.replace('  const valuesList', 'export const valuesList'));
extract(about, 'section', [
  { name: 'AboutMission', imports: "import { valuesList } from '../../data/about';" },
  { name: 'AboutTeam' }, { name: 'AboutPartners' },
  { name: 'AboutContact', imports: "import { useFormConfirmation } from '../../hooks/useFormConfirmation';", setup: 'const { formSubmitted, handleSubmit } = useFormConfirmation();' },
], `${base}/components/about`, '../components/about');
source = read(about).replace(/^import \{ useState \}.*\r?\n/m, '');
source = source.slice(0, source.indexOf('  const [formSubmitted')) + source.slice(source.indexOf('  return ('));
write(about, source);

const projects = `${base}/pages/RedesignProjects.tsx`;
source = read(projects);
const projectData = source.slice(source.indexOf('  const castropProjects'), source.indexOf('  const filteredPhotos'));
write(`${base}/data/projects.tsx`, projectData.replace(/  const (castropProjects|dortmundProjects|activityPhotos)/g, 'export const $1'));
extract(projects, 'section', [
  { name: 'ProjectsByLocation', imports: "import { useState } from 'react';\nimport { castropProjects, dortmundProjects } from '../../data/projects';", setup: "const [selectedLocation, setSelectedLocation] = useState<'castrop' | 'dortmund'>('castrop');" },
  { name: 'ProjectGallery', imports: "import { useState } from 'react';\nimport { activityPhotos } from '../../data/projects';", setup: "const [galleryFilter, setGalleryFilter] = useState<'all' | 'castrop' | 'dortmund' | 'berlin'>('all');\nconst filteredPhotos = activityPhotos.filter(photo => galleryFilter === 'all' || photo.location === galleryFilter);" },
], `${base}/components/projects`, '../components/projects');
source = read(projects).replace(/^import \{ useState \}.*\r?\n/m, '');
source = source.slice(0, source.indexOf('  const [selectedLocation')) + source.slice(source.indexOf('  return ('));
write(projects, source);

const contact = `${base}/pages/RedesignContact.tsx`;
extract(contact, 'section', [
  { name: 'ContactChannels' },
  { name: 'ContactInquiry', imports: "import { useFormConfirmation } from '../../hooks/useFormConfirmation';\nimport type { ContactSubject } from '../../hooks/useContactInquiry';", props: '{ selectedSubject, onSubjectChange }: { selectedSubject: ContactSubject; onSubjectChange: (subject: ContactSubject) => void }', setup: 'const { formSubmitted, handleSubmit } = useFormConfirmation();', usage: 'selectedSubject={selectedSubject} onSubjectChange={setSelectedSubject}' },
  { name: 'ContactSupport', imports: "import type { ContactSubject } from '../../hooks/useContactInquiry';", props: '{ scrollToFormWithSubject }: { scrollToFormWithSubject: (subject: ContactSubject) => void }', usage: 'scrollToFormWithSubject={scrollToFormWithSubject}' },
], `${base}/components/contact`, '../components/contact');
source = read(contact).replace(/^import \{ useState, useEffect \}.*\r?\n/m, '').replace(/^import \{ useLocation \}.*\r?\n/m, '');
source = "import { useContactInquiry } from '../hooks/useContactInquiry';\n" + source;
source = source.slice(0, source.indexOf('  const [formSubmitted')) + '  const { selectedSubject, setSelectedSubject, scrollToFormWithSubject } = useContactInquiry();\n\n' + source.slice(source.indexOf('  return ('));
write(contact, source);
const inquiry = `${base}/components/contact/ContactInquiry.tsx`;
write(inquiry, read(inquiry).replace('setSelectedSubject(e.target.value)', 'onSubjectChange(e.target.value as ContactSubject)'));

extract(`${base}/pages/RedesignNews.tsx`, 'article', [
  { name: 'BerlinExchangeArticle' }, { name: 'WomensDayArticle' },
  { name: 'RefugeeWelcomeArticle' }, { name: 'NeighborhoodMarketArticle' },
], `${base}/components/news`, '../components/news');
