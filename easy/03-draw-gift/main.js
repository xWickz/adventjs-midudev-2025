/**
 * @param {number} size - The size of the gift
 * @param {string} symbol - The symbol to draw
 * @returns {string} The gift drawn
 */
function drawGift(size, symbol) {
  if (size < 2) return ''

  // This is top and the border part of the matrix
  const top = symbol.repeat(size)

  // Now this is the pattern fill including the spaces
  const middle = symbol + ' '.repeat(Math.max(0, size - 2)) + symbol

  // Joining all in a single string, top - middle - border
  const lines = [top, ...Array(Math.max(0, size - 2)).fill(middle), top].join(
    '\n'
  )

  return lines
}