let myDictionary = {};

function createDictionary(arrayOfWordsInLine) {
  arrayOfWordsInLine.forEach(word => {
    if (word.length > 0) {
      if (myDictionary[word]) {
        myDictionary[word]++;
      } else {
        myDictionary[word] = 1
      }
    }
  });
}

module.exports = {
  createDictionary,
  myDictionary
}