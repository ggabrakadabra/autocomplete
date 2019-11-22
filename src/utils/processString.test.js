const { processString } = require('./processString.js');

describe('processString', () => {
  it('will remove special characters and lowercase', () => {
    const testString = 'I just took a DNA test, turns out I\'m 100% that';
    const expectedResponse = [
      'i', 'just', 'took', 'a', 'dna', 'test', '', 'turns', 'out', 'i\'m', '', '', '', '', '', 'that'
    ];
    expect(processString(testString)).toEqual(expectedResponse);

    const testStringUrl = 'http://http.ibiblio.org/gutenberg/etext06';
    const expected = ['http', '', '', 'http', 'ibiblio', 'org', 'gutenberg', 'etext', '', ''];
    expect(processString(testStringUrl)).toEqual(expected);
  });
});