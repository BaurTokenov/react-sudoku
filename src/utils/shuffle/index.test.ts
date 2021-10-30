import shuffle from './'

type TestShuffleMap = Record<number, number>

describe('shuffle', () => {
  it('returns an array with the same length after being shuffled', () => {
    //
    const array = [1, 2, 3]
    const prevLength = array.length
    shuffle(array)
    expect(array).toHaveLength(prevLength)
  })

  it('returns and array with the same elements after being shuffled', () => {
    const array1 = [1, 2, 9, 4, 5, 6, 6, 6, 1, 1, 7, 3]
    const elems: TestShuffleMap = {}
    array1.forEach((elem) => {
      if (elem in elems) {
        elems[elem] += 1
      } else {
        elems[elem] = 1
      }
    })
    shuffle(array1)

    let isError = false
    array1.forEach((elem) => {
      if (!(elem in elems)) {
        isError = true
      } else {
        elems[elem] -= 1
      }
    })

    Object.values(elems).map((value) => {
      if (value !== 0) {
        isError = true
      }
    })
    expect(isError).toEqual(false)
    //
  })
})
