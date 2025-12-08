/**
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */
function matchGloves(gloves) {
  // Incluiremos en este mapeo: color, { l: n, r: n }
  const counts = new Map()

  // Recorremos gloves
  for (const g of gloves) {
    if (!g || typeof g.color !== 'string') continue
    const color = g.color
    const hand = (g.hand || '').toUpperCase()
    if (hand !== 'L' && hand !== 'R') continue

    // si aún no existe el color, inicializamos
    if (!counts.has(color)) counts.set(color, { L: 0, R: 0 }) 

    // incrementamos respectiva al color, la mano
    counts.get(color)[hand]++
  }

  const result = []

  // recordando que counts su formato era el que dije arriba
  for (const [color, { L, R }] of counts) {
    const pairs = Math.min(L, R)

    for (let i = 0; i < pairs; i++) {
      result.push(color)
    }
  }

  return result
}