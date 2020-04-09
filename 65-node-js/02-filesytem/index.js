const fs = require('fs').promises;
const path = require('path');

async function readDir(rootDir = path.resolve(__dirname)) {
  const files = await fs.readdir(rootDir);
  walk(files, rootDir);
}

async function walk(files, rootDir) {
  
  for (file of files) {
    
    const fileFullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(fileFullPath);

    if (/\.git/g.test(fileFullPath)) continue;
    if (/node_modules/g.test(fileFullPath)) continue;

    if (stats.isDirectory()) {
      readDir(fileFullPath);
      continue;
    }

    if (!/\.html$/g.test(fileFullPath)) continue;

    console.log(fileFullPath);

  }
}

readDir('/home/djalmeida/djcode/js-from-basic-to-advanced');