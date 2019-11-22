const { getProcessArguments } = require('./utils/getProcessArguments');
const { validateTextFiles } = require('./utils/validateTextFiles');
const { createDictionary, myDictionary } = require('./utils/createDictionary');
const { searchDictionary } = require('./utils/searchDictionary');
const { findResults } = require('./utils/findResults');

function playFunction() {
  console.time('p');
  const { wordString, fileNameArray } = getProcessArguments();
  const filesExist = validateTextFiles(fileNameArray)
  const validInputs = (wordString && fileNameArray) && filesExist;

  if (validInputs) {
    findResults(wordString, fileNameArray);
  } else {
    console.timeEnd('p');
    console.log('Please use valid string and/or file name array for inputs.');
  }
}

playFunction();

module.exports = {
  playFunction,
  createDictionary,
  searchDictionary,
  findResults,
  myDictionary
}
