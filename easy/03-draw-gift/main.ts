function drawGift(size: number, symbol: string): string {
  if (size < 2) return '';

  const sym = symbol?.[0] ?? '';
  if (!sym) return '';

  const top = sym.repeat(size);
  const middle = sym + ' '.repeat(Math.max(0, size - 2)) + sym;
  const lines = [top, ...Array(Math.max(0, size - 2)).fill(middle), top].join('\n');

  return lines;
}