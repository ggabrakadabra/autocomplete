function processString(wordString) {
  return wordString.toLowerCase().replace(/[^\p{L}'-]+/gu, ' ').split(' ');
}

module.exports = {
  processString
};