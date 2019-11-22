const { playFunction } = require('./solution.js');
const { findResults } = require('./utils/findResults.js');
const readline = require('readline');

console.log = jest.fn();

describe('solution', () => {
  describe('playFunction', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('will call find results function', () => {
      const createInterfaceSpy = jest.spyOn(readline, 'createInterface');
      process.argv = [
        'node/path',
        'file/path',
        'hello',
        'src/text/shakespeare-complete.txt'
      ];

      playFunction();

      findResults('foo', ['src/text/shakespeare-complete.txt']);
      expect(createInterfaceSpy).toHaveBeenCalled();
    });

    it('will print to console for invalid text file', () => {
      process.argv = [
        'node/path',
        'file/path',
        'gooo',
        'merp.foo'
      ];

      playFunction();

      expect(console.log.mock.calls).toEqual([
        ['Please use valid string and/or file name array for inputs.']
      ]);
    });
  });
});