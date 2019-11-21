const { processString } = require('./processString');
const { myDictionary } = require('./createDictionary');
const { sortWordsByTopTwentyFive } = require('./sortWordsByTopTwentyFive');

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
  
  console.log('autocomplete results:');
  process.stdout.write('\n')
  topTwentyFive.forEach(result => {
    if (result) {
      const word = Object.keys(result)
      const wordCount = result[word];
      console.log(`${word}: ${wordCount}`)
    }
  });
  return topTwentyFive;
}

module.exports = {
  searchDictionary
}
