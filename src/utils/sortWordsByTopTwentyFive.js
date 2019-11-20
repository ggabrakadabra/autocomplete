function sortWordsByTopTwentyFive(wordAndValueObject) {
	const sortResults = (a,b) => {
	  const wordA = Object.keys(a)
	  const wordB = Object.keys(b)
	  if (a[wordA].value < b[wordB].value ) return 1
	  if (b[wordB].value < a[wordA].value ) return -1
	  return 0
  }
    return wordAndValueObject.sort(sortResults).slice(0, 25);
  }

module.exports = {
  sortWordsByTopTwentyFive
}