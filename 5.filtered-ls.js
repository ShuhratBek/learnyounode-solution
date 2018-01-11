const fs = require('fs');
const path = require('path');
const ext = '.' + process.argv[3];

fs.readdir(process.argv[2], (err, list) => {
  list.forEach((filename) => {
    if (path.extname(filename) === ext) {
      console.log(filename);
    }
  });
});
