/**
 * @param {string[][]} map - The town map.
 * @returns {number} - Minimum steps to deliver all gifts.
 */
function minStepsToDeliver(map) {
  const rows = map.length
  const cols = map[0].length

  const visited = Array.from({ length: rows }, () => Array(cols).fill(false))

  const distance = Array.from({ length: rows }, () =>
    Array(cols).fill(Infinity)
  )

  let startX, startY

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (map[i][j] === 'S') {
        startX = i
        startY = j
      }
    }
  }

  const queue = [[startX, startY]]
  visited[startX][startY] = true
  distance[startX][startY] = 0

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ]

  while (queue.length > 0) {
    const [x, y] = queue.shift()

    for (const [dx, dy] of directions) {
      const nx = x + dx
      const ny = y + dy

      if (
        nx >= 0 &&
        nx < rows &&
        ny >= 0 &&
        ny < cols &&
        !visited[nx][ny] &&
        map[nx][ny] !== '#'
      ) {
        visited[nx][ny] = true
        distance[nx][ny] = distance[x][y] + 1
        queue.push([nx, ny])
      }
    }
  }

  let totalSteps = 0

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (map[i][j] === 'G') {
        if (distance[i][j] === Infinity) {
          return -1
        }
        totalSteps += distance[i][j]
      }
    }
  }

  return totalSteps
}