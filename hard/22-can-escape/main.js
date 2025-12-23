function canEscape(maze) {
  const rows = maze.length
  const cols = maze[0].length

  const visited = Array.from({ length: rows }, () =>
    Array(cols).fill(false)
  )

  let start
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (maze[i][j] === 'S') {
        start = [i, j]
      }
    }
  }
  const queue = [start]
  visited[start[0]][start[1]] = true

  const directions = [
    [1, 0],  // abajo
    [-1, 0], // arriba
    [0, 1],  // derecha
    [0, -1]  // izquierda
  ]
  while (queue.length > 0) {
    const [x, y] = queue.shift()

    if (maze[x][y] === 'E') return true

    for (const [dx, dy] of directions) {
      const nx = x + dx
      const ny = y + dy

      if (
        nx >= 0 && nx < rows &&
        ny >= 0 && ny < cols &&
        !visited[nx][ny] &&
        maze[nx][ny] !== '#'
      ) {
        visited[nx][ny] = true
        queue.push([nx, ny])
      }
    }
  }

  return false
}