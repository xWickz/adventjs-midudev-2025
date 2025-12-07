/**
 * ¡Es hora de decorar el árbol de Navidad 🎄! Escribe una función que reciba:

height → la altura del árbol (número de filas).
ornament → el carácter del adorno (por ejemplo, "o" o "@").
frequency → cada cuántas posiciones de asterisco aparece el adorno.
El árbol se dibuja con asteriscos *, pero cada frequency posiciones, el asterisco se reemplaza por el adorno.

El conteo de posiciones empieza en 1, desde la copa hasta la base, de izquierda a derecha. Si frequency es 2, los adornos aparecen en las posiciones 2, 4, 6, etc.

El árbol debe estar centrado y tener un tronco # de una línea al final.

🧩 Ejemplos
drawTree(5, 'o', 2)
//     *
//    o*o
//   *o*o*
//  o*o*o*o
// *o*o*o*o*
//     #

drawTree(3, '@', 3)
//   *
//  *@*
// *@**@
//   #

drawTree(4, '+', 1)
//    +
//   +++
//  +++++
// +++++++
//    #
 */

/** @param {number} height - Height of the tree
 *  @param {string} ornament - Character to use as ornament
 *  @param {number} frequency - How often ornaments appear
 *  @returns {string} The decorated tree
 */
function drawTree(height, ornament, frequency) {
  // Code here

  const maxWidth = 2 * height - 1;
  let pos = 1;
  const lines = [];

  for(let row = 1; row <= height; row++) {
    const starsCount = 2 * row - 1;
    let rowChars = "";

    for(let i = 0; i < starsCount; i++) {
      if(frequency && (pos % frequency === 0)) {
        rowChars += ornament;
      } else {
        rowChars += "*";
      }

      pos++;
    }

    const leftPadding = " ".repeat((maxWidth - starsCount) / 2);
    lines.push(leftPadding + rowChars);

  }

  const trunkPadding = " ".repeat((maxWidth - 1) / 2);
  lines.push(trunkPadding + "#");

  return lines.join("\n");
}

/**
 * Revisión de código: 5/5
Puntos fuertes:
• La solución es correcta y robusta, manejando adecuadamente los casos de borde como una frecuencia de 0 o 1.
• El código es muy legible, con nombres de variables descriptivos y una estructura clara.
• La lógica para calcular el espaciado y la colocación de los adornos es precisa y eficiente.
• El uso de `Array.prototype.join` para construir el resultado final es una buena práctica para el rendimiento de cadenas.
 */