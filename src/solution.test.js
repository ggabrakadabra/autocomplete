const { 
	findResults,
	searchDictionary,
	playFunction,
} = require('./solution.js');
const { createDictionary, myDictionary } = require('./utils/createDictionary');
const readline = require('readline');

console.log = jest.fn();

describe('solution', () => {
	describe('findResults', () => {
		it('will create interface', () => {
			const createInterfaceSpy = jest.spyOn(readline, 'createInterface');
			findResults('foo', ['src/text/shakespeare-complete.txt']);
			expect(createInterfaceSpy).toHaveBeenCalled();
		})

		it('for invalid file path input', () => {
			process.argv = [
				'node/path',
				'file/path',
				'querystring',
				'foo.txt'
			];
			findResults('querystring', ['foo.txt']);

			expect(console.log.mock.calls).toEqual([
				['Issue importing text files or with input string.'],
				['Please try again.']
			]);
		});
	});

	describe('searchDictionary', () => {
		it('will return results for search query', () => {
			const arrayOfWordsInLine = [
				'afoo', 'afoo', 'afoo', 'afoo', 'afoo', 'aaaa', 'aaaa', 'happy', 'happy', 'happy',
			];
			const expected = [
				{'afoo': 5},
				{'happy': 3},
				{'aaaa': 2},
			];
			createDictionary(arrayOfWordsInLine);
			expect(searchDictionary('a')).toEqual(expected);
		});
	});

	describe('playFunction', () => {

		it('will write to console', () => {
			process.argv = [
				'node/path',
				'file/path',
				'ala',
				'src/text/shakespeare-complete.txt'
			];

			// process.stdout.write = jest.fn();

			playFunction();

			expect(console.log.mock.calls).toEqual()
		});

		it('for invalid query string input', () => {
			process.argv = [
				'node/path',
				'file/path',
				'567',
				'src/text/shakespeare-complete.txt'
			];

			playFunction();

			// test this way because of issue with single/double quotes
			expect(console.log.mock.calls).toEqual([
				["Issue importing text files or with input string."], 
				["Please try again."], 
				["Please use valid string and/or file name array for inputs."]
			]);

		});
	});
});