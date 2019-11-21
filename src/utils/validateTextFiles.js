const fs = require('fs');

function validateTextFiles(fileNameArray) {
  const fileCheck = fileNameArray.map(file => {
    return fs.existsSync(file) && file.includes('.txt');
  });
  return fileCheck.length > 0 && fileCheck.every(value => value === true);
}

module.exports = {
  validateTextFiles
};