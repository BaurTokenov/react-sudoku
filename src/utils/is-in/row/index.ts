import { GRID, NUMBERS } from 'types'

interface IInput {
  grid: GRID
  row: number
  value: NUMBERS
}

/**
 *
 * @param grid 9x9 array
 * @param row the row you want to check for duplicate
 * @param value the value you want to check
 * @returns boolean whether the value is present in the given row
 */
export default function isInRow({ grid, row, value }: IInput): boolean {
  return grid[row].includes(value)
}
