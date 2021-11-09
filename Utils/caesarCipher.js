const {UPPERCASE_ARRAY, LOWERCASE_ARRAY} = require('../Constants/CONSTANTS')

const caesarCipher = (str, k) => {
  if (k % 26 === 0) return str;
  while (k < 0) k += 26
  while (k > 26) k -= 26
  return [...str].map((el) => {
    if (UPPERCASE_ARRAY.indexOf(el) !== -1) return encodeSup(el, UPPERCASE_ARRAY, k)
    if (LOWERCASE_ARRAY.indexOf(el) !== -1) return encodeSup(el, LOWERCASE_ARRAY, k)
    return el
  }).join(``)
}

function encodeSup (el, arr, k) {
  if (arr[arr.indexOf(el) + k]) return arr[arr.indexOf(el) + k]
  else return arr[arr.indexOf(el) + k - 26]
}

module.exports = caesarCipher