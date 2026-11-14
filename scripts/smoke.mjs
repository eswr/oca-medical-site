import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve('dist');
const routes = ['index.html','about/index.html','book/index.html','insurance/index.html','services/index.html','providers/index.html','blog/index.html','conditions/index.html','contact/index.html','locations/index.html','partners/index.html','404.html','services/pain-management/index.html','services/orthopedic-care/index.html','services/spine-care/index.html','conditions/back-pain/index.html','providers/adam-weitzman/index.html','blog/conservative-to-interventional-care/index.html'];
let failed=0;
for (const file of routes){const full=path.join(root,file);if(!fs.existsSync(full)){console.error(`MISSING: ${full}`);failed++;continue;}
 const body=fs.readFileSync(full,'utf8');if(!body.includes('<html')||!body.includes('OCA')){console.error(`UNEXPECTED CONTENT: ${file}`);failed++;}}
for (const file of ['images/logo.png','images/hero-pain.webp','images/clinic.webp','.nojekyll']){if(!fs.existsSync(path.join(root,file))){console.error(`MISSING ASSET: ${file}`);failed++;}}
if(failed){console.error(`${failed} smoke checks failed`);process.exit(1)}
console.log(`Passed ${routes.length} page checks and 4 asset checks.`);
