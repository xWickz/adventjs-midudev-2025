/**
 * @param {Array<Object>} data - The data to draw the table
 * @param {string} sortBy - The field to sort the table
 * @returns {string}
 */
function drawTable(data, sortBy) {
  // copy data y ordenar segun lo que pida
  const sorted = [...data].sort((a, b) => {
    const x = a[sortBy];
    const y = b[sortBy];

    if (typeof x === "number") return x - y;
    return String(x).localeCompare(String(y));
  });

  const columns = Object.keys(sorted[0]);

  // letra de la columna
  const headers = columns.map((_, i) => {
    return String.fromCharCode(65 + i);
  });

  // ancho de cada columna
  const widths = columns.map((col, i) => {
    return Math.max(
      headers[i].length,
      ...sorted.map((row) => String(row[col]).length)
    );
  });

  // auxiliar para las lineas
  const line = () =>
    "+" + widths.map((w) => "-".repeat(w + 2)).join("+") + "+\n";

  // para los lados
  const row = (cells) =>
    "|" +
    cells.map((cell, i) => " " + cell.padEnd(widths[i]) + " ").join("|") +
    "|\n";

  let table = "";
  table += line();
  table += row(headers);
  table += line();

  for (const item of sorted) {
    table += row(columns.map((c) => String(item[c])));
  }

  table += line();

  return table.trimEnd();
}
