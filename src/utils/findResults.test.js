const readline = require('readline');
const { findResults } = require('./findResults.js');
const processString = require('./processString');

describe('findResults', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  console.log = jest.fn();

  it('will create interface', () => {
    jest.mock('readline');

    const createInterfaceSpy = jest.spyOn(readline, 'createInterface');

    findResults('foo', ['src/text/shakespeare-complete.txt']);
    expect(createInterfaceSpy).toHaveBeenCalled();
  });

  // it('will process each line of text file', () => {
  //   const firstLine = ['hello', 'this', 'is', 'a', 'test', 'file'];
  //   const processStringSpy = jest.spyOn(processString, 'processString');

  //   findResults('is', ['src/text/test.txt']);

  //   expect(processStringSpy).toHaveBeenCalledWith(firstLine);
  // });

  // it('will search dictionary once all lines of all files are processed', () => {

  // });
});