import createFullGrid from '.'

describe('createFullGrid', () => {
  it('returns a 9x9 sudoku grid', () => {
    const grid = createFullGrid()

    for (let row of grid) {
      for (let val of row) {
        expect(val).toBeGreaterThanOrEqual(1)
        expect(val).toBeLessThanOrEqual(9)
      }
    }
  })
})
