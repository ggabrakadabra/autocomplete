const { searchDictionary } = require('./searchDictionary.js');
const { createDictionary } = require('./createDictionary');

console.log = jest.fn();
describe('searchDictionary', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('will console log if no results', () => {
    searchDictionary('foo')
    expect(console.log.mock.calls).toEqual([
      ['no results']
    ]);
  });

  it('will return results for search query', () => {
    const arrayOfWordsInLine = [
      'afoo', 'afoo', 'afoo', 'afoo', 
      'afoo', 'aaaa', 'aaaa', 'happy', 'happy', 'happy',
      'eeep', 'hello'
    ];
    const expected = [
      {'afoo': 5},
      {'happy': 3},
      {'aaaa': 2},
    ];

    createDictionary(arrayOfWordsInLine);
    expect(searchDictionary('a')).toEqual(expected);
    expect(console.log.mock.calls).toEqual([
      ['autocomplete results:'], 
      ['afoo: 5'], 
      ['happy: 3'], 
      ['aaaa: 2']
    ]);
  });
});