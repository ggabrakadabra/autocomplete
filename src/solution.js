const fs = require('fs');
const readline = require('readline');
const { processString, checkForValidInputString } = require('./utils/processString');
const { getProcessArguments } = require('./utils/getProcessArguments');
const { sortWordsByTopTwentyFive } = require('./utils/sortWordsByTopTwentyFive');
const { validateTextFiles } = require('./utils/validateTextFiles');
const { createDictionary, myDictionary } = require('./utils/createDictionary');

const testEnvironment = process.env.NODE_ENV === 'test'

function findResults(wordString, fileNameArray) {

  function processFiles(fileNameArray) {
    const filesExist = validateTextFiles(fileNameArray)
    if (filesExist) {
      fileNameArray.forEach(file => {
        processLineByLine(file);
      });
    } else {
      console.log('Issue importing text files or with input string.')
      console.log('Please try again.')
    }
  }

  let processed = 0;

  function processLineByLine(filename) {
    const rl = readline.createInterface({
      input: fs.createReadStream(filename, { encoding: 'utf-8' }),
      crlfDelay: Infinity
    });

    rl.on('line', (line) => {
      const arrayOfWordsInLine = processString(line);

      createDictionary(arrayOfWordsInLine);
    });

    return rl.once('close', () => {
      processed++
      if (processed === fileNameArray.length) {
        searchDictionary(wordString);
      }
    });
  }

  processFiles(fileNameArray);
}

function searchDictionary(wordString) {
  const word = processString(wordString);

  const wordAndValueArray = Object.entries(myDictionary).map((element) => {
    const currentWord = element[0];
    const currentWordCount = element[1];
    if (currentWord.includes(word)) {
      return { [currentWord]: currentWordCount } 
    }
  });

  const topTwentyFive = sortWordsByTopTwentyFive(wordAndValueArray);

  if (!testEnvironment) {
    console.log('autocomplete results:');
    process.stdout.write('\n')
    topTwentyFive.forEach(result => {
      const word = Object.keys(result)
      const wordCount = result[word];
      console.log(`${word}: ${wordCount}`)
    })
  }

  return topTwentyFive;
}

function playFunction() {
  const { wordString, fileNameArray } = getProcessArguments();
  const validString = checkForValidInputString(wordString);
  const validInputs = (wordString && fileNameArray) && validString;
  if (validInputs) {
    findResults(wordString, fileNameArray);
  } else {
    console.log('Please use valid string and/or file name array for inputs.')
  }
}

 /* istanbul ignore next */
if (!testEnvironment) {
  playFunction();
}

module.exports = {
  playFunction,
  createDictionary,
  searchDictionary,
  findResults,
  myDictionary
}
