/**
 * En el taller de Santa, los elfos han encontrado una montaña de guantes mágicos totalmente desordenados. Cada guante viene descrito por dos valores:

hand: indica si es un guante izquierdo (L) o derecho (R)
color: el color del guante (string)
Tu tarea es ayudarles a emparejar guantes: Un par válido es un guante izquierdo y uno derecho del mismo color.

Debes devolver una lista con los colores de todos los pares encontrados. Ten en cuenta que puede haber varios pares del mismo color.

🧩 Ejemplos
const gloves = [
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'red' },
  { hand: 'R', color: 'green' },
  { hand: 'L', color: 'blue' },
  { hand: 'L', color: 'green' }
]

matchGloves(gloves)
// ["red", "green"]

const gloves2 = [
  { hand: 'L', color: 'gold' },
  { hand: 'R', color: 'gold' },
  { hand: 'L', color: 'gold' },
  { hand: 'L', color: 'gold' },
  { hand: 'R', color: 'gold' }
]

matchGloves(gloves2)
// ["gold", "gold"]

const gloves3 = [
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'green' },
  { hand: 'L', color: 'blue' }
]

matchGloves(gloves3)
// []
 */

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
    if (!counts.has(color)) counts.set(color, { L: 0, R: 0 }) // agregalo jose

    // incrementamos respectiva al color, la mano
    counts.get(color)[hand]++
  }

  const result = []

  // recordando que counts su formato era el que dije arriba
  for (const [color, { L, R }] of counts) {
    const pairs = Math.min(L, R)
    console.log(pairs)

    for (let i = 0; i < pairs; i++) {
      result.push(color)
    }
  }

  return result
}

/**
 * Revisión de código: 5/5
Puntos fuertes:
• La lógica para emparejar los guantes es correcta y robusta, manejando adecuadamente los casos de entrada inválida o incompleta.
• El uso de `Map` es una elección eficiente para contar los guantes por color y mano, resultando en una complejidad temporal y espacial óptima (O(N)).
• El código es claro, legible y bien estructurado, facilitando su comprensión y mantenimiento.
Puntos a mejorar:
• Se incluye una sentencia `console.log` que debería eliminarse en código de producción, ya que es una operación de efecto secundario y no forma parte de la lógica algorítmica principal.
Próximos pasos:
• Elimina la sentencia `console.log(pairs)` para mantener la pureza algorítmica de la función.
 */