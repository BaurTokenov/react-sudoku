import { GRID, NUMBERS } from 'types'
import isInCol from '.'

const gridExample: GRID = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [3, 0, 0, 0, 0, 0, 0, 0, 0],
  [4, 0, 0, 0, 0, 0, 0, 0, 0],
  [5, 0, 0, 0, 0, 0, 0, 0, 0],
  [6, 0, 0, 0, 0, 0, 0, 0, 0],
  [7, 0, 0, 0, 0, 0, 0, 0, 0],
  [8, 0, 0, 0, 0, 0, 0, 0, 0],
  [9, 0, 0, 0, 0, 0, 0, 0, 0],
]

describe('isInCol', () => {
  it('properly returns if the value is present in col', () => {
    const isPresent = isInCol({
      grid: gridExample,
      col: 0,
      value: 8,
    })
    const notIsPresent = isInCol({
      grid: gridExample,
      col: 3,
      value: 7,
    })
    expect(isPresent).toEqual(true)
    expect(notIsPresent).toEqual(false)
  })
})
