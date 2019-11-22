# Autocomplete
Goal: Create a program that can autocomplete word fragments using one or more text files as the data source.

## How to Use
clone project and run `npm install`
run `npm run autocomplete` followed by query string and source text files

example:
`npm run autocomplete queryString source-text1.txt source-text2.txt....`

For the case of contractions, will need to either wrap contraction in double quotes or escape the apostrophe.

`npm run autocomplete "'d" source-text1.txt source-text2.txt....`

or

`npm run autocomplete \'d source-text1.txt source-text2.txt....`

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
The results for the requested queries are located within the text folder in RESULTS.md.

## Known Bugs / Issues
  * does not currently have 100% test coverage, would like to test readline events but according to `https://stackoverflow.com/questions/52463456/nodejs-write-to-stdin-in-jest-a` it be be fine to leave this untested for now and only test the functions being called.

## Next Steps
If given more time, 
* I would have enjoyed creating a simple and sleek UI. A form component that only shows a search bar with another dropdown component that will display the top 25 results. Then each time the user enters a new letter, the results would populate based on the new query. 
* Add support for returning url results. Currently, the program will split a url into work chunks (http, www, org), instead, I want to add functionality for verifying urls and not splitting them.
* Try experimenting with using a suffix trie.

## Extra Credit
Unicode data and queries should be fully supported (e.g. `ünch` might return `München`, and `ÁRE` might return `JUÁREZ`)
* Previously, I had regex that would only allow for english alphabet and `'` and `-` and remove all other special characters. To add unicode data support, I first tried changing my regex to blacklist the special characters I cared to remove. Then I realized this would still have issues because there is a large list of special characters and to do his properly, I would have to specify every single one to skip in my regex. So then I did more digging on unicode and how to include other languages. I found a unicode selection for letters and so I whitelisted the replace to not include any letter or `'` and `-`. To verify that these characters would indeed be skipped, I used extra-credit.txt and added the special characters I was testing for. 

The program should be able to handle large files and remain performant in both time and space complexity. What would you need to do to make this program able to search against thousands of files the size of Shakespeare's complete works?
* I tested my solution's ability to process a large number of large files by calling it with 1000 shakespeare's complete works. The program didn't crash in the terminal but did take a long time to complete. By using readline, the program will process the files one line at a time rather than read the entire file into memory. If the files being used would always be defined in the project, then the solution could be to preprocess those files and create dictionaries for them. This would make look up quicker since a dictionary doesn't have to be created each time. I also did a bit of research on a suffix trie solution with a sliding window, could also be useful in this case but I do not have experience writing suffix trie's and decided to go with my solution.

Imagine now that your program was going to be used in a web context. Would your program need to change? If so, how? What would you do to ensure the program can handle a high frequency of autocomplete searches and remain performant. Would you need to change your implementation as frequency increased from 1 search/second to 1000 searches/second? 100000 searches/second?
* If there were mulitple servers available, I could utilize load balancing across multiple servers. This would split the thousands of calls and return results a lot faster. Another possible optimization would be to cache common requests and their results for quicker lookup. 