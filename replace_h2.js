const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if(file.endsWith('.tsx')) results.push(file);
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // Find <h2 style={{ fontFamily: 'var(--font-spartan)' and replace with poppins
  // Or just replace var(--font-spartan) to var(--font-poppins) inside <h2 lines.
  const lines = content.split('\n');
  let inH2 = false;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('<h2')) {
       lines[i] = lines[i].replace(/var\(--font-spartan\)/g, 'var(--font-poppins)');
       lines[i] = lines[i].replace(/fontWeight: 800/g, 'fontWeight: 700'); // Poppins bold
    }
  }
  content = lines.join('\n');

  if(content !== original) {
    fs.writeFileSync(file, content);
    console.log('Updated H2 fonts in:', file);
  }
});
