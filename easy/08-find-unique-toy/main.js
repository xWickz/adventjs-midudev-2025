/**
 * @param {string} toy - The toy to find the first unique one letter
 * @returns {string} The first unique letter in the toy
 */
function findUniqueToy(toy) {
  let freq = new Map()

  for (let char of toy.toLowerCase()) freq.set(char, (freq.get(char) || 0) + 1)

  for (let i = 0; i < toy.length; i++) {
    let lowerChar = toy[i].toLowerCase()
    if (freq.get(lowerChar) === 1) return toy[i]
  }

  return ''
}
