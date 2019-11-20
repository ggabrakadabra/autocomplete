function processString(wordString) {
  return wordString.toLowerCase().replace(/[^a-zA-Z ]/g, ' ').split(' ');
}

module.exports = {
  processString
};