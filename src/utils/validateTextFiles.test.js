const { validateTextFiles } = require('./validateTextFiles.js');

describe('validateTextFiles', () => {
  it('will return true if all files exist', () => {
    const inputFileArray = [
      'src/text/shakespeare-complete.txt',
      'src/text/shakespeare-complete.txt',
      'src/text/shakespeare-complete.txt'
    ];
    expect(validateTextFiles(inputFileArray)).toEqual(true);
  });

  it('will return false if one of files does not exist', () => {
    const inputFileArray = [
      'hello.txt',
      'goodbye.txt',
      'good-morning.txt'
    ];
    expect(validateTextFiles(inputFileArray)).toEqual(false);
  });
});