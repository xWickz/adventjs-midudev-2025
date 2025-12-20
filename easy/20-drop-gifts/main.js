/**
 * @param {string[][]} warehouse
 * @param {number[]} drops
 * @returns {string[][]}
 */

function dropGifts(warehouse, drops) {
  const rows = warehouse.length
  for (const col of drops) {
    for (let row = rows - 1; row >= 0; row--) {
      if (warehouse[row][col] === '.') {
        warehouse[row][col] = '#'
        break
      }
    }
  }
  return warehouse
}