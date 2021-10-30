import { GRID, NUMBERS } from 'types'
import isInRow from '.'

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

describe('isInRow', () => {
  it('properly returns if the value is present in row', () => {
    const isPresent = isInRow({
      grid: gridExample,
      row: 1,
      value: 1,
    })
    const notIsPresent = isInRow({
      grid: gridExample,
      row: 3,
      value: 5,
    })
    expect(isPresent).toEqual(true)
    expect(notIsPresent).toEqual(false)
  })
})
