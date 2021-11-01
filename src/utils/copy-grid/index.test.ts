import copyGrid from '.'
import { createFullGrid } from 'utils'
import { GRID } from 'types'

describe('copyGrid', () => {
  it('checks if the returned grids are the same', () => {
    const grid: GRID = createFullGrid()
    expect(copyGrid(grid)).toStrictEqual(grid)
  })
})
