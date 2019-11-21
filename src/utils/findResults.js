const fs = require('fs');
const readline = require('readline');
const { processString } = require('./processString');
const { createDictionary } = require('./createDictionary');
const { searchDictionary } = require('./searchDictionary');

function findResults(wordString, fileNameArray) {

  fileNameArray.forEach(file => {
    processLineByLine(file);
  });

  let processed = 0;

  function processLineByLine(filename) {
    const rl = readline.createInterface({
      input: fs.createReadStream(filename, { encoding: 'utf-8' }),
      crlfDelay: Infinity
    });

    /* istanbul ignore next */
    rl.on('line', (line) => {
      const arrayOfWordsInLine = processString(line);

      createDictionary(arrayOfWordsInLine);
    });
    
    /* istanbul ignore next */
    return rl.once('close', () => {
      processed++
      if (processed === fileNameArray.length) {
        searchDictionary(wordString);
      }
    });
  }
}

module.exports = {
  findResults
}