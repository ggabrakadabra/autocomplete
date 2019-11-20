function getProcessArguments() {
  const wordString = process.argv[2];
  const fileNameArray = process.argv.slice(3, process.argv.length)
  return { wordString, fileNameArray };
}

module.exports = {
  getProcessArguments
};