/**
 * @param {string[][]} routes - Array of [origin, destination] pairs
 * @returns {string[]} The reconstructed route
 */

function revealSantaRoute(routes) {
  const map = new Map()

  for (const [from, to] of routes) map.set(from, to)

  const result = [routes[0][0]]
  let current = routes[0][0] 

  while (map.has(current)) { 
    const next = map.get(current) 
    result.push(next) 
    current = next 
  }

  return result
}