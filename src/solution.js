const { checkForValidInputString } = require('./utils/processString');
const { getProcessArguments } = require('./utils/getProcessArguments');
const { validateTextFiles } = require('./utils/validateTextFiles');
const { createDictionary, myDictionary } = require('./utils/createDictionary');
const { searchDictionary } = require('./utils/searchDictionary');
const { findResults } = require('./utils/findResults');

function playFunction() {
  const { wordString, fileNameArray } = getProcessArguments();
  const validString = checkForValidInputString(wordString);
  const filesExist = validateTextFiles(fileNameArray)
  const validInputs = (wordString && fileNameArray) && validString && filesExist;

  if (validInputs) {
    findResults(wordString, fileNameArray);
  } else {
    console.log('Please use valid string and/or file name array for inputs.')
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
