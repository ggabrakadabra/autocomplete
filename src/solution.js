const fs = require('fs');
const readline = require('readline');
const { processString } = require('./utils/processString');
const { getProcessArguments } = require('./utils/getProcessArguments');
const { sortWordsByTopTwentyFive } = require('./utils/sortWordsByTopTwentyFive');
const { verifyFilesExist } = require('./utils/verifyFilesExist');

let myDictionary = {};

function createDictionary(arrayOfWordsInLine) {
  arrayOfWordsInLine.forEach(word => {
    if (word.length > 0) {
      if (myDictionary[word]) {
        myDictionary[word] = {
          value: myDictionary[word].value + 1
        };
      } else {
        myDictionary[word] = {
          value: 1
        };
      }
    }
  });
}

function findResults(wordString, fileNameArray) {

  function processFiles(fileNameArray) {
    const filesExist = verifyFilesExist(fileNameArray)
    if (filesExist) {
      fileNameArray.forEach(file => {
        processLineByLine(file);
      });
    } else {
      console.log('issue importing text files, check import path')
    }
  }
  
  processFiles(fileNameArray);

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
}

function searchDictionary(wordString) {
  const word = processString(wordString);
  const filteredWordsByInputString = Object.keys(myDictionary).filter(element => element.includes(word))
  const wordAndValueObject = filteredWordsByInputString.map((element) => {
    return { [`${element}`]: myDictionary[element] }
  });

  const topTwentyFive = sortWordsByTopTwentyFive(wordAndValueObject);

  console.log('autocomplete results', topTwentyFive);
  return topTwentyFive;
}


function playFunction() {
  const { wordString, fileNameArray } = getProcessArguments();
  if (wordString && fileNameArray) {
    findResults(wordString, fileNameArray);
  } else {
    console.log('use valid string and/or file name array for inputs')
  }
}

playFunction();



