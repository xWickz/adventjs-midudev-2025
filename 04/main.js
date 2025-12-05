/**
 * Los elfos han encontrado el código cifrado que protege la puerta del taller de Santa 🔐. El PIN tiene 4 dígitos, y está escondido dentro de bloques como estos:

[1++][2-][3+][<]
Escribe una función que descifre el PIN a partir del código.

El código está formado por bloques entre corchetes [...] y cada bloque genera un dígito del PIN.

Un bloque normal tiene la forma [nOP...], donde n es un número (0-9) y después puede haber una lista de operaciones (opcionales).

Las operaciones se aplican en orden al número y son:

+ suma 1
- resta 1
El resultado siempre es un dígito (aritmética mod 10), por ejemplo 9 + 1 → 0 y 0 - 1 → 9.

También existe el bloque especial [<], que repite el dígito del bloque anterior.

Si al final hay menos de 4 dígitos, se debe devolver null.

🧩 Ejemplos
decodeSantaPin('[1++][2-][3+][<]')
// "3144"

decodeSantaPin('[9+][0-][4][<]')
// "0944"

decodeSantaPin('[1+][2-]')
// null (solo 2 dígitos)
 */

/**
 * @param {string} code - The code to decipher
 * @returns {string} The deciphered PIN
 */
function decodeSantaPin(code) {

  const n = code.length;
  const digits = [];
  let i = 0;

  while(i < n) {
    while(i < n && code[i] !== '[') i++;
    if (i >= n) break;

    i++;
    let content = '';
    while(i < n && code[i] !== ']') {
      content += code[i];
      i++;
    }

    if(i >= n) {
      return null;
    }
    i++;

    if(content === '') return null;

    if(content === '<') {
      if(digits.length === 0) return null;
      digits.push(digits[digits.length - 1]);

    } else {
      const first = content[0];
      if(first < '0' || first > '9') return null;

      let value = Number(first);
      const ops = content.slice(1);

      for(let ch of ops) {
        if (ch !== '+' && ch !== '-') return null;
        if (ch === '+') value = (value + 1) % 10;
        else value = (value - 1 + 10) % 10;
      }

      digits.push(value);
    }
  }

  return digits.length < 4 ? null : digits.slice(0, 4).join('');
}

/**
 * Revisión de código: 5/5
Puntos fuertes:
• El código es robusto y maneja correctamente varios casos de borde e inválidos, incluyendo formatos incorrectos de bloques y la ausencia de 4 dígitos.
• La lógica para las operaciones aritméticas (suma/resta módulo 10) es precisa y maneja correctamente el comportamiento cíclico.
• La complejidad temporal y espacial es óptima (O(n) tiempo, O(1) espacio), lo que indica una buena calidad algorítmica.
• El uso de `const` y `let` es adecuado, y el formato es consistente, contribuyendo a la legibilidad.
Puntos a mejorar:
• La complejidad ciclomática es alta (18), lo que sugiere que la función tiene muchas rutas de ejecución y ramificaciones condicionales. Esto puede dificultar la comprensión y el mantenimiento del código en el futuro.
Próximos pasos:
• Considera refactorizar la lógica de parsing de los bloques para reducir la complejidad ciclomática. Esto podría implicar el uso de expresiones regulares o la creación de una pequeña función auxiliar para parsear un único bloque, lo que mejoraría la legibilidad y mantenibilidad.
 */