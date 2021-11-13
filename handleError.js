const fs = require('fs');
const path = require('path');
const {CONFIG, METHODS} = require('./Constants/CONSTANTS')
const [arrConfigAndParams, config] = require("./Utils/parseTerminal")

function handleError() {
  config.forEach(el => {
    if(el !== '-o') {
      if (!CONFIG.includes(el)) {
        process.stderr.write(`Action (${CONFIG.join('/')}) is required \n`);
        process.exit(1);
      }
    }
  })

  if (new Set([...config]).size !== config.length) {
    process.stderr.write(`Сonfig actions should not be repeated \n`);
    process.exit(1);
  }

  const arrMethods = arrConfigAndParams.filter(el => el.includes('-c'))[0][1].split('-')
  arrMethods.forEach(el => {
    if (!METHODS.includes(el)) {
      process.stderr.write(`Markers can only be such (${METHODS.join('/')})\n`);
      process.exit(1);
    }
  })

  const input = arrConfigAndParams.filter(el => el.includes('-i'))[0][1]
  if (input) {
    if (!fs.existsSync(path.join(__dirname, input))) {
      process.stderr.write('Input file is missed \n');
      process.exit(1);
    }
  }

  const output = arrConfigAndParams.filter(el => el.includes('-o'))[0][1]

  return [arrMethods, input, output]
}

module.exports = handleError();
