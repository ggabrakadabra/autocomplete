function processString(wordString) {
  return wordString.toLowerCase().replace(/[^a-z'-]/g, ' ').split(' ');
}

function checkForValidInputString(wordString) {
  const validRegex = /^[a-z(')!@#\$%\^\&*\)\(+=._-]{1,}$/g
  const validString = validRegex.test(wordString)
  return validString;
}

module.exports = {
  processString,
  checkForValidInputString
};