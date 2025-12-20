/**
 * @param {string[][]} warehouse
 * @param {number[]} drops
 * @returns {string[][]}
 */
function clearGifts(warehouse, drops) {
  const rows = warehouse.length;
  const cols = warehouse[0].length;

  for (const col of drops) {
    let placed = false 

    // Reglas de la caída
    for (let row = rows - 1; row >= 0; row--) {
      if (warehouse[row][col] === '.') {
        warehouse[row][col] = '#'
        placed = true
        break
      }
    }

    if (!placed) continue 

    // Regla del robot de la limpieza
    for (let r = rows - 1; r >= 0; r--) {
      if (warehouse[r].every( cell => cell === '#' )) {
        warehouse.splice(r, 1)
        warehouse.unshift( Array(cols).fill('.') )
        r++
      }
    }
  }

  return warehouse
}