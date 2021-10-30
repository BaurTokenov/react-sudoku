import { GRID, NUMBERS } from 'types'

interface IInput {
  grid: GRID
  col: number
  value: NUMBERS
}
/**
 *
 * @param grid 9x9 array
 * @param col the column you want to check for duplicate
 * @param value the value you want to check
 * @returns boolean whether the value is present in given col
 */
export default function isInCol({ grid, col, value }: IInput): boolean {
  let isInColumn = false
  for (let j = 0; j < grid.length; ++j) {
    if (value === grid[j][col]) {
      isInColumn = true
    }
  }
  return isInColumn
}
