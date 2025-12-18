/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourInARow(board) {

  const rows = board.length
  const cols = board[0].length
  const directions = [
    [0, 1], // horizontal
    [1, 0], // vertical
    [1, 1], // diagonal d
    [1, -1] // diagonal i
  ]

  for (let r = 0; r < rows; ++r) {
    for (let c = 0; c < cols; ++c) {
      const cell = board[r][c]
      if (cell === '.') continue
      for (const [dr, dc] of directions) {
        let inARow = 1
        for (let k = 1; k < 4; ++k) {
          const nr = r + dr * k,
            nc = c + dc * k
          if (
            nr < 0 ||
            nr >= rows ||
            nc < 0 ||
            nc >= cols ||
            board[nr][nc] !== cell
          ) {
            break
          }
          inARow++
        }
        if (inARow === 4) return true
      }
    }
  }
  return false
}