/**
 * En el taller de Santa hay un elfo becario que está aprendiendo a envolver regalos 🎁.

Le han pedido que envuelva cajas usando solo texto… y lo hace más o menos bien.

Le pasan dos parámetros:

size: el tamaño del regalo cuadrado
symbol: el carácter que el elfo usa para hacer el borde (cuando no se equivoca 😅)
El regalo debe cumplir:

Debe ser un cuadrado de size x size.
El interior siempre está vacío (lleno de espacios), porque el elfo "aún no sabe dibujar el relleno".
Si size < 2, devuelve una cadena vacía: el elfo lo intentó, pero se le perdió el regalo.
El resultado final debe ser un string con saltos de línea \n.
Sí, es un reto fácil… pero no queremos que despidan al becario. ¿Verdad?

🧩 Ejemplos
const g1 = drawGift(4, '*')
console.log(g1)

const g2 = drawGift(3, '#')
console.log(g2)

const g3 = drawGift(2, '-')
console.log(g3)

const g4 = drawGift(1, '+')
console.log(g4)
// ""  pobre becario…
 */

/**
 * @param {number} size - The size of the gift
 * @param {string} symbol - The symbol to draw
 * @returns {string} The gift drawn
 */
function drawGift(size, symbol) {

  if(size < 2) return '';
  
  // This is top and the border part of the matrix
  const top = symbol.repeat(size);

  // Now this is the pattern fill including the spaces
  const middle = symbol + ' '.repeat(Math.max(0, size - 2)) + symbol;

  // Joining all in a single string, top - middle - border
  const lines = [top, ...Array(Math.max(0, size - 2)).fill(middle), top].join('\n');

  return lines;
  
}

/**
 * Revisión de código: 5/5
Puntos fuertes:
• El código es muy legible y fácil de entender, con nombres de variables descriptivos.
• Maneja correctamente los casos límite, como cuando el tamaño es menor que 2.
• La solución es eficiente, utilizando métodos de cadena y array de forma óptima.
• La estructura del código es lineal y clara, sin complejidad innecesaria.
• Los comentarios son útiles y explican las partes clave de la lógica.
 */