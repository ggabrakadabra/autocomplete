function processString(wordString) {
  return wordString.toLowerCase().replace(/[^a-zA-Z'-]/g, ' ').split(' ');
}

function checkForValidInputString(wordString) {
  const validRegex = /^[a-zA-Z(')!@#\$%\^\&*\)\(+=._-]{1,}$/g
  const validString = validRegex.test(wordString)
  return validString;
}

module.exports = {
  processString,
  checkForValidInputString
};