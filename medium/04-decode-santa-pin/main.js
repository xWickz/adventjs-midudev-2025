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