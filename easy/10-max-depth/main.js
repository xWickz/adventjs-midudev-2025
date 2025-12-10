/**
 * @param {string} s - The string to check
 * @returns {number} The maximum depth of the magic
 */
function maxDepth(s) {
  let current = 0
  let max = 0

  for (const char of s) {
    if (char === '[') {
      current++
      max = Math.max(max, current)
    } else if (char === ']') {
      current--
      if (current < 0) return -1
    }
  }

  return current === 0 ? max : -1
}