/**
 * Santa ha recibido una lista de regalos, pero algunos están defectuosos. Un regalo es defectuoso si su nombre contiene el carácter #.

Ayuda a Santa escribiendo una función que reciba una lista de nombres de regalos y devuelva una nueva lista que solo contenga los regalos sin defectos.

Ejemplos
const gifts1 = ['car', 'doll#arm', 'ball', '#train']
const good1 = filterGifts(gifts1)
console.log(good1)
// ['car', 'ball']

const gifts2 = ['#broken', '#rusty']
const good2 = filterGifts(gifts2)
console.log(good2)
// []

const gifts3 = []
const good3 = filterGifts(gifts3)
console.log(good3)
// []
 */

function filterGifts(gifts) {
  return gifts.filter((gift) => !gift.includes("#"));
}

/**
 * Revisión de código: 5/5
Puntos fuertes:
• El código es conciso, legible y utiliza una comprensión de lista (list comprehension) de manera muy efectiva, lo que es una práctica idiomática en Python.
• La solución es completamente correcta y robusta, manejando adecuadamente todos los casos de entrada.
• La complejidad algorítmica es óptima, procesando la lista de regalos en una sola pasada.
 */