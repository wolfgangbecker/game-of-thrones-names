import {expect} from 'chai'
import gameOfThronesNames from '.'

describe('game-of-thrones-names', () => {
  it('should have a list of all available names', () => {
    expect(gameOfThronesNames.all).to.satisfy(isArrayOfStrings)
  })

  it('should allow me to get a random name from the list', () => {
    expect(gameOfThronesNames.random()).to.satisfy(isIncludedIn(gameOfThronesNames.all))
  })
})

function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
  return item => array.includes(item)
}
