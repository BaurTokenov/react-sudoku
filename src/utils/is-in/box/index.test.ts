import { GRID } from 'types'
import isInSameBox from '.'

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

describe('isInSameBox', () => {
  it('must return true if it is in the same box', () => {
    let isPresent = isInSameBox({
      grid: gridExample,
      row: 1,
      col: 0,
      value: 4,
    })
    expect(isPresent).toEqual(true)
    isPresent = isInSameBox({
      grid: gridExample,
      row: 3,
      col: 3,
      value: 7,
    })
    expect(isPresent).toEqual(true)
    isPresent = isInSameBox({
      grid: gridExample,
      row: 7,
      col: 8,
      value: 8,
    })
    expect(isPresent).toEqual(true)
  })
})
