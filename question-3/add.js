const fs = require('fs');
const path = require('path');

const logsDictry = path.join(__dirname, 'Logs');

function createLogFiles() {
  if (!fs.existsSync(logsDictry)) {
    fs.mkdirSync(logsDictry);
  }

  process.chdir(logsDictry);

  for (let i = 0; i <= 9; i++) {
    const fileName = `log${i}.txt`;
    const fileContent = `log #${i}.`;

    fs.writeFileSync(fileName, fileContent);
    console.log(`${fileName}`);
  }
}

createLogFiles();