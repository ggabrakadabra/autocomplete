const { getProcessArguments } = require('./getProcessArguments.js');

describe('getProcessArguments', () => {
  it('will return object with current word string and filename', () => {
    process.argv = [
      'node/path',
      'file/path',
      'querystring',
      'sometext.txt',
      'something/anotherfile.txt'
    ]

    const expectedResponse = { 
      wordString: 'querystring', 
      fileNameArray: ['sometext.txt', 'something/anotherfile.txt'] 
    };
    expect(getProcessArguments()).toEqual(expectedResponse)
  });
});
