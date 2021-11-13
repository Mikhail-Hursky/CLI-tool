const fs = require('fs');
const path = require('path');
const [arrMethods, input, output] = require("./handleError");
const switcher = require("./Utils/switcher");

function createStreams() {
  let inputStream, outPutStream
  if (input) {
    const pathToInputFile = path.join(__dirname, input);
    inputStream = fs.createReadStream(pathToInputFile, 'utf8');
  } else {
    inputStream = process.stdin;
  }

  if (output) {
    const pathToOutputFile = path.join(__dirname, output);
    outPutStream = fs.createWriteStream(pathToOutputFile);
  } else {
    outPutStream = process.stdout;
  }

  return {
    switcher,
    arrMethods,
    inputStream,
    outPutStream
  };
}

module.exports = createStreams();