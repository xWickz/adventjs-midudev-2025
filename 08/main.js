/**
 * Santa 🎅 quiere saber cuál es la primera letra no repetida en el nombre de un juguete 🎁.

Escribe una función que reciba un string y devuelva la primera letra que no se repite, ignorando mayúsculas y minúsculas al contar, pero devolviendo la letra tal como aparece en el string.

Si no hay ninguna, devuelve una cadena vacía ("").

Ejemplos:

findUniqueToy('Gift') // 'G'
// ℹ️ La G es la primera letra que no se repite
// y la devolvemos tal y como aparece

findUniqueToy('sS') // ''
// ℹ️ Las letras se repiten, ya que no diferencia mayúsculas

findUniqueToy('reindeeR') // 'i'
// ℹ️ La r se repite (aunque sea en mayúscula)
// y la e también, así que la primera es la 'i'

// Más casos:
findUniqueToy('AaBbCc') // ''
findUniqueToy('abcDEF') // 'a'
findUniqueToy('aAaAaAF') // 'F'
findUniqueToy('sTreSS') // 'T'
findUniqueToy('z') // 'z'
 */

/**
 * @param {string} toy - The toy to find the first unique one letter
 * @returns {string} The first unique letter in the toy
 */

function findUniqueToy(toy) {
  let freq = new Map();
  
  for(let char of toy.toLowerCase()) 
    freq.set(char, (freq.get(char) || 0) + 1);
  

  for(let i = 0; i < toy.length; i++) {
    let lowerChar = toy[i].toLowerCase();
    if(freq.get(lowerChar) === 1) return toy[i];
  }

  return ''
}

/**
 * Revisión de código: 5/5
Puntos fuertes:
• La lógica para encontrar la primera letra no repetida es correcta y eficiente.
• El uso de `Map` para almacenar frecuencias es apropiado.
• El código maneja correctamente la distinción entre mayúsculas y minúsculas al contar, pero devuelve la letra original.
• Los casos de borde, como cadenas vacías o cadenas con todas las letras repetidas, están bien manejados.
 */