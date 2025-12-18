/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourLights(board) {
  const rows = board.length
  const cols = board[0].length

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const cell = board[i][j]
      if (cell === '.') continue

      let count = 0
      for (let col = j; col < cols; col++) {
        if (board[i][col] === cell) count++
        else break
      }

      if (count >= 4) return true

      count = 0
      for (let row = i; row < rows; row++) {
        if (board[row][j] === cell) count++
        else break
      }

      if (count >= 4) return true
    }
  }
  return false
}