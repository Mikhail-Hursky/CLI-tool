const {switcher, arrMethods, inputStream, outPutStream} = require("./createStreams");

inputStream.on('data', function (chunk) {
  outPutStream.write(switcher(chunk, arrMethods));
});
