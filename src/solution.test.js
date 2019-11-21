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

		it('will print to console for invalid query string input', () => {
			process.argv = [
				'node/path',
				'file/path',
				'567',
				'src/text/shakespeare-complete.txt'
			];

			playFunction();

			expect(console.log.mock.calls).toEqual([
				['Please use valid string and/or file name array for inputs.']
			]);

		});
	});
});