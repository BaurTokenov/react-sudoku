import { GRID } from 'types'

import fillGrid from '.'

describe('fillGrid', () => {
  it('fills a grid', () => {
    const grid: GRID = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 9, 0, 0, 0, 0],
      [0, 4, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 5, 0, 0, 0, 0, 0, 0],
    ]
    fillGrid(grid)
    for (let row of grid) {
      for (let val of row) {
        expect(val).toBeGreaterThanOrEqual(1)
        expect(val).toBeLessThanOrEqual(9)
      }
    }
  })
})
