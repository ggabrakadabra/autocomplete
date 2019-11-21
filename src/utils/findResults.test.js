const readline = require('readline');
const fs = require('fs');
const { findResults } = require('./findResults.js');

describe('findResults', () => {
  console.log = jest.fn();

  it('will process each line of text file and search dictionary', () => {
    const createReadStreamSpy = jest.spyOn(fs, 'createReadStream');
    const createInterfaceSpy = jest.spyOn(readline, 'createInterface');

    findResults('sir-', ['src/text/shakespeare-complete.txt']);

    expect(createInterfaceSpy).toHaveBeenCalled();
    expect(createReadStreamSpy).toHaveBeenCalledWith('src/text/shakespeare-complete.txt', { encoding: 'utf-8' });
  });
});