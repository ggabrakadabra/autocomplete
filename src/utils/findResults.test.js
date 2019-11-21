const readline = require('readline');
const { findResults } = require('./findResults.js');

describe('findResults', () => {
  it('will create interface', () => {
    jest.mock("readline");

    const createInterfaceSpy = jest.spyOn(readline, 'createInterface');

    findResults('foo', ['src/text/shakespeare-complete.txt']);
    expect(createInterfaceSpy).toHaveBeenCalled();
  });
});