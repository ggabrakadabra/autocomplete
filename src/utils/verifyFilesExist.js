const fs = require('fs');

function verifyFilesExist(fileNameArray) {
  const fileCheck = fileNameArray.map(file => {
    return fs.existsSync(file);
  });

  return fileCheck.every(value => value === true);
}

module.exports = {
  verifyFilesExist
}