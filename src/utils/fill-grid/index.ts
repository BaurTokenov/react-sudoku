import { GRID, NUMBERS } from 'types'
import { shuffle } from 'utils'
import checkGrid from 'utils/check-grid'
import { isInCol, isInRow, isInSameBox } from 'utils/is-in'

const gridExample: GRID = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
]

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
/**
 * A backtracking/recursive function to check all the possible combinations of numbers until a solution is found
 * @param grid :9x9 sudoku grid ;
 */

function fillGrid(grid: GRID) {
  let row = 0
  let col = 0
  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9)
    col = i % 9

    if (grid[row][col] === 0) {
      shuffle(numbers)
      // recursion
      for (let value of numbers) {
        // is it not in grid row
        // is it not in grid col
        // is it not in the grid square

        if (!isInRow({ grid, row, value })) {
          if (!isInCol({ grid, col, value })) {
            if (!isInSameBox({ grid, row, col, value })) {
              grid[row][col] = value
              if (checkGrid(grid)) {
                return true
              } else if (fillGrid(grid)) return true
            }
          }
        }

        // cgecj grud if it is full, if yes, stop and return
        // otherwise recursively run the function
      }
      break
    } else {
    }
  }

  grid[row][col] = 0
}

export default fillGrid
