const fs = require('fs').promises;
module.exports = (path) => fs.readFile(path, { encoding: 'utf-8' });