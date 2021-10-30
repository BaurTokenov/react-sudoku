import { GRID } from 'types'
import checkGrid from '.'

const gridExample: GRID = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [2, 3, 0, 0, 0, 0, 0, 0, 0],
  [3, 0, 4, 0, 0, 0, 4, 0, 0],
  [4, 0, 0, 5, 0, 0, 0, 0, 0],
  [5, 0, 0, 0, 7, 0, 4, 0, 0],
  [6, 0, 0, 0, 0, 0, 0, 0, 0],
  [7, 0, 3, 0, 0, 0, 0, 0, 0],
  [8, 0, 0, 0, 9, 0, 8, 0, 0],
  [9, 0, 0, 0, 0, 0, 0, 0, 0],
]

describe('checkEmptyGrid', () => {
  it('must return true box is not filled', () => {
    const isFilled = checkGrid(gridExample)
    expect(isFilled).toEqual(false)
  })
})
