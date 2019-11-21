const fs = require('fs');
const readline = require('readline');
const { processString } = require('./processString');
const { createDictionary } = require('./createDictionary');
const { searchDictionary } = require('./searchDictionary');

function findResults(wordString, fileNameArray) {
  const numberOfFiles = fileNameArray.length;
  fileNameArray.forEach(fileName => {
    const rl = readline.createInterface({
      input: fs.createReadStream(fileName, { encoding: 'utf-8' }),
      crlfDelay: Infinity
    });
  
    let processed = 0;
  
    rl.on('line', (line) => {
      const arrayOfWordsInLine = processString(line);
  
      createDictionary(arrayOfWordsInLine);
    });
  
    rl.once('close', () => {
      processed++;
      if (processed === numberOfFiles) {
        searchDictionary(wordString);
      }
    });
  });
}

module.exports = {
  findResults
};