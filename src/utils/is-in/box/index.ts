import { GRID, NUMBERS } from 'types'

interface IInput {
  grid: GRID
  row: number
  col: number
  value: NUMBERS
}
/**
 *
 * @param grid 9x9 array
 * @param row the current row number
 * @param col the current col number
 * @param value the value you want to check
 * @returns boolean whether the value is present in given col
 */
export default function isInSameBox({
  grid,
  col,
  row,
  value,
}: IInput): boolean {
  const boxRowStart = Math.floor(row / 3) * 3
  const boxColStart = Math.floor(col / 3) * 3
  const boxRowEnd = boxRowStart + 2
  const boxColEnd = boxColStart + 2
  console.log({
    row,
    col,
    boxRowStart,
    boxRowEnd,
    boxColStart,
    boxColEnd,
  })
  for (let i = boxRowStart; i <= boxRowEnd; i += 1) {
    for (let j = boxColStart; j <= boxColEnd; j += 1) {
      if (grid[i][j] === value) {
        return true
      }
    }
  }
  return false
}
