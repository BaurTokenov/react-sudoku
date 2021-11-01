import { GRID } from 'types'

/**
 * Compares two arrays and return true if they are equal
 * @param arr1
 * @param arr2
 */
function compareGrids(arr1: GRID, arr2: GRID): boolean {
  for (let i = 0; i < arr1.length; ++i) {
    for (let j = 0; j < arr1[i].length; ++j) {
      if (arr1[i][j] !== arr2[i][j]) {
        return false
      }
    }
  }

  return true
}

export default compareGrids
