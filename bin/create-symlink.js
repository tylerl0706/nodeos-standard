const fs = require('fs');
fs.symlink(`${__dirname}/../eslintrc.json`, `${__dirname}/../../../eslintrc.json`, (err) => {
  if(err && err.errno != -17) throw err;
});