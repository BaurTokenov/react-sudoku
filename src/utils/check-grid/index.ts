import { GRID } from 'types'

/**
 *
 * @param grid : 9x9 grid;
 * @returns false if there is at least one 0 value
 */
function checkGrid(grid: GRID): boolean {
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (grid[i][j] === 0) {
        return false
      }
    }
  }
  return true
}

export default checkGrid
