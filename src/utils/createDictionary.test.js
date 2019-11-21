const { createDictionary, myDictionary } = require('./createDictionary');

describe('createDictionary', () => {
  it('will create dictionary and store value for number of times word has been used', () => {
    const expected = {
      'this': 1,
      'is': 1,
      'a': 1,
      'sentence': 2,
      'with': 1,
      'words': 1,
      'yay': 3,
    }
    const arrayOfWordsInLine = ['this', 'is', 'a', 'sentence', 'with', 'words', 'yay', 'yay', 'sentence', 'yay', ''];

    createDictionary(arrayOfWordsInLine);
    expect(myDictionary).toEqual(expected);
  });
});