const {UPPERCASE_ARRAY, LOWERCASE_ARRAY} = require('./CONSTANTS')

const atbashCipher = (str) => {
  const UpArr = [...UPPERCASE_ARRAY].reverse()
  const LoArr = [...LOWERCASE_ARRAY].reverse()
  return str.split('').reduce((acc, el) => {
    if (UPPERCASE_ARRAY.indexOf(el) !== -1) return `${acc}${UpArr[UPPERCASE_ARRAY.indexOf(el)]}`
    if (LOWERCASE_ARRAY.indexOf(el) !== -1) return `${acc}${LoArr[LOWERCASE_ARRAY.indexOf(el)]}`
    return `${acc}${el}`
  }, '')
}

module.exports = atbashCipher