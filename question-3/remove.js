const fs = require('fs');
const path = require('path');

const logsDictry = path.join(__dirname, 'Logs');

function removeLogFiles() {
    fs.readdirSync(logsDictry).forEach((file) => {
      const filePath = path.join(logsDictry, file);

      if (fs.statSync(filePath).isFile()) {
        console.log(`delete files...${file}`);
        fs.unlinkSync(filePath); 
      }
    });

    fs.rmdirSync(logsDictry); 
}

removeLogFiles();