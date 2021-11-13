function parseTerminal() {
  const arrConfigAndParams = process.argv
    .slice(2)
    .reduce(
      (acc, el, index) => (index % 2 === 0
        ? acc.push([el])
        : acc[acc.length - 1].push(el)) && acc, [])
  const config = process.argv
    .slice(2)
    .filter((el, i) => i%2 === 0)

  return [arrConfigAndParams, config]
}

module.exports = parseTerminal();