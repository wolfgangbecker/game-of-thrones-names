import uniqueRandomArray from 'unique-random-array'
const gameOfThronesNames = require('./game-of-thrones-names.json')

const mainExport = {
  all: gameOfThronesNames,
  random: uniqueRandomArray(gameOfThronesNames),
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
