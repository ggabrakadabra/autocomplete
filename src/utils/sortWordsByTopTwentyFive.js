function sortWordsByTopTwentyFive(wordAndValueArray) {
	const sortResults = (a,b) => {
	  const wordA = Object.keys(a)
	  const wordB = Object.keys(b)
	  if (a[wordA] < b[wordB] ) return 1
	  if (b[wordB] < a[wordA] ) return -1
	  return 0
	}
    return wordAndValueArray.sort(sortResults).slice(0, 25);
  }

module.exports = {
  sortWordsByTopTwentyFive
}