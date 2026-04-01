/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const walkSync = (dir, callback) => {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    var filepath = path.join(dir, file);
    const stats = fs.statSync(filepath);
    if (stats.isDirectory()) {
      walkSync(filepath, callback);
    } else if (stats.isFile() && (filepath.endsWith('.tsx') || filepath.endsWith('.ts'))) {
      callback(filepath);
    }
  });
};

const replaceInFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace text-white with text-text unless it's explicitly meant to be white
  // E.g., hover:text-white might still be valid if background becomes accent. But generally text-text is safer.
  content = content.replace(/\btext-white\b/g, 'text-text');
  content = content.replace(/\btext-white\//g, 'text-text/');
  
  // Replace border-white/... with border-text/... or border-black/5
  content = content.replace(/\bborder-white\/10\b/g, 'border-text/10');
  content = content.replace(/\bborder-white\/20\b/g, 'border-text/20');
  content = content.replace(/\bborder-white\/5\b/g, 'border-text/5');
  
  // bg-white/10 -> bg-text/5
  content = content.replace(/\bbg-white\/10\b/g, 'bg-text/5');
  
  // bg-black/40 -> bg-white/60 or similar for glass. For light theme glass, we want white bg.
  // Actually, bg-black/40 was often used for photo overlays (darkening the photo). So maybe leave bg-black/40 for photo overlays alone.
  // Wait, if it's the badge (like the button over an image), bg-black/40 is fine because it's text-white inside it.
  // It's tricky.
  
  if (original !== content) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
};

walkSync(path.join(__dirname, 'src', 'components'), replaceInFile);
walkSync(path.join(__dirname, 'src', 'app'), replaceInFile);

console.log('Migration complete.');
