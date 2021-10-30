/**
 * An array shuffling using the Fisher-Yates shuffle algorithm
 * @param array An array for shuffling
 */
function shuffle(array: any[]) {
  for (let i = array.length - 1; i >= 1; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

export default shuffle
