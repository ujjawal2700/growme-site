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
      if(file.endsWith('.tsx') || file.endsWith('.css')) results.push(file);
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // For logos in Navbar and Footer
  if(file.includes('Navbar.tsx') || file.includes('Footer.tsx')) {
    content = content.replace(/fontFamily:\s*'var\(--font-syne\)',\s*fontWeight:\s*800/g, "fontFamily: 'var(--font-archivo)', fontWeight: 900");
  }

  // Replace Space Mono entirely with Poppins
  content = content.replace(/var\(--font-space-mono\)/g, 'var(--font-poppins)');
  
  // Replace ALL remaining Syne usages with League Spartan
  content = content.replace(/var\(--font-syne\)/g, 'var(--font-spartan)');
  
  // globals.css fix for base font family (sans-serif)
  if(file.includes('globals.css')) {
     content = content.replace(/font-family: 'DM Sans', sans-serif;/g, "font-family: sans-serif;");
  }

  if(content !== original) {
    fs.writeFileSync(file, content);
    console.log('Updated:', file);
  }
});
