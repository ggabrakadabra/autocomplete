# Autocomplete
A node cli autocomplete program that will return the top 25 words from a given file.

## How to Use
clone project and run `npm install`

run `npm run autocomplete` followed by query string and source text files

example:
`npm run autocomplete queryString source-text1.txt source-text2.txt....`

## How it works 
  * When calling the file with the `npm run autocomplete query filename`, the function will verify that the first argument is a string and that the following arguments are valid text files. 
  * If these inputs are not valid (the text file doesn't exist or the query contains numbers), then the program will log a message to the console,
    ```
    Please use valid string and/or file name array for inputs.
    ```
  * If the inputs are valid, then it will begin processing the first text file (if many provided) and then the next, and so on.
  * The processing is done line by lazy loading each line of the text file and adding the words of the line into the dictionary.
  * If a word already exists in the dictionary then the count for that word is incremented
  * Once all text files have been loaded and their words added to the dictionary, the input string will be used to search the dictionary for all words that contain it.
  * All words that do contain the input string are sorted by the number of times in appeared in the input text and then the top 25 words and their counts are printed to the console.
  * For the cases where there are no results, the program will output `no results` to the console. 

## Results
The results for the given queries is located within the text folder. 

## Known Bugs / Issues
  * does not currently have 100% test coverage, would like to test readline events but according to `https://stackoverflow.com/questions/52463456/nodejs-write-to-stdin-in-jest-a` it be be fine to leave this untested for now and only test the functions being called.

## Next Steps
If given more time, 
* I would have enjoyed creating a simple and sleek UI. A form component that only shows a search bar with another dropdown component that will display the top 25 results. 
* Tried experimenting with using a node tree, though I am not sure if that would be more optimized
* Find the proper way to test the findResults function that uses readline.

## Extra Credit
Unicode data and queries should be fully supported (e.g. `ünch` might return `München`, and `ÁRE` might return `JUÁREZ`)
* Adding unicode support for unicode is tough because there are different special characters for different languages. I did find a unicode regex (pasted the url from stack overflow and the regex in unicode-regex.txt). Ideally, the program would be able to recognize the language used in the query string and then process the query string and the text file according to the language that was used. 

The program should be able to handle large files and remain performant in both time and space complexity. What would you need to do to make this program able to search against thousands of files the size of Shakespeare's complete works?
* By using readline, and then evaluating the text files line by line, the program can be called with many large files but if there are thousands of files this may get slow. There would need to be one common dictionary. This should read the lines of all files at the same time, instead of reading one file at a time line by line.

Imagine now that your program was going to be used in a web context. Would your program need to change? If so, how? What would you do to ensure the program can handle a high frequency of autocomplete searches and remain performant. Would you need to change your implementation as frequency increased from 1 search/second to 1000 searches/second? 100000 searches/second?
* To handle a high load of search quests and also storage for a growing dictionary, there would need to be many servers. 

