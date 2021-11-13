const caesarCipher = require("./caesarCipher")
const atbashCipher = require("./atbashCipher")
const {METHODS} = require("../Constants/CONSTANTS")


function switcher(chunk, arrMethods) {
  let txt = chunk
  arrMethods.forEach(el => {
    switch (el) {
      case METHODS[0]:
        txt = caesarCipher(txt, 1);
        break;
      case METHODS[1]:
        txt = caesarCipher(txt, -1);
        break;
      case METHODS[2]:
        txt = atbashCipher(txt);
        break;
      case METHODS[3]:
        txt = caesarCipher(txt, 8);
        break;
      case METHODS[4]:
        txt = caesarCipher(txt, -8);
        break;
    }
  })

  return txt
}

module.exports = switcher;