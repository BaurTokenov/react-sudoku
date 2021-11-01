import { GRID } from 'types'
import { getRandomIndex, copyGrid, solveGrid } from 'utils'
import global from 'global'

/**
 * Removes numbers from a full grid to create a Sudoku Puzzle;
 * @param grid 9x9 sudoku grid
 * @param attempts number of attempts to solve (higher means more difficult)
 * @returns
 */
function removeNumbers(grid: GRID, attempts = 1): GRID {
  while (attempts > 0) {
    let row = getRandomIndex()
    let col = getRandomIndex()

    while (grid[row][col] === 0) {
      row = getRandomIndex()
      col = getRandomIndex()
    }

    const backup = grid[row][col]
    grid[row][col] = 0
    // copy grid
    const gridCopy = copyGrid(grid)
    // set a global counter

    global.counter = 0

    solveGrid(gridCopy)

    // attempt to solve the grid
    if (global.counter !== 1) {
      grid[row][col] = backup
      attempts -= 1
    }
    // if global counter is not 1
    // grid[row][col] = backup
    // decrement attempts
  }

  return grid
}

export default removeNumbers
