/**
 * @param {string[]} warehouse - The warehouse layout
 * @returns {number} The count of unwatched gifts
 */
function findUnsafeGifts(warehouse) {
  let counter = 0;
  const rows = warehouse.length;
  const cols = warehouse[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (warehouse[i][j] !== "*") continue;

      const up = warehouse[i - 1]?.[j];
      const down = warehouse[i + 1]?.[j];
      const left = warehouse[i]?.[j - 1];
      const right = warehouse[i]?.[j + 1];

      if (up === "#" || down === "#" || left === "#" || right === "#") continue;

      counter++;
    }
  }

  return counter;
}
