function decodeSantaPin(code: string): string {
  const n = code.length;
  const digits: number[] = [];
  let i = 0;

  while (i < n) {
    // move to next '['
    while (i < n && code[i] !== '[') i++;
    if (i >= n) break;
    i++; // skip '['

    // read content until ']'
    let content = '';
    while (i < n && code[i] !== ']') {
      content += code[i];
      i++;
    }

    // unmatched '['
    if (i >= n) return null;
    i++; // skip ']'

    if (content === '') return null;

    if (content === '<') {
      if (digits.length === 0) return null;
      digits.push(digits[digits.length - 1]);
      continue;
    }

    // first char must be a digit
    const first = content[0];
    if (first < '0' || first > '9') return null;

    let value = Number(first);
    const ops = content.slice(1);

    for (const ch of ops) {
      if (ch !== '+' && ch !== '-') return null;
      value = ch === '+' ? (value + 1) % 10 : (value - 1 + 10) % 10;
    }

    digits.push(value);
  }

  return digits.length < 4 ? null : digits.slice(0, 4).join('');
}