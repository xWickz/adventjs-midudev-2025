/**
 * @param {string[]} factory - The factory layout
 * @returns {'completed'|'broken'|'loop'} Result of the gift journey
 */
function runFactory(factory) {
  const rows = factory.length;
  const cols = factory[0].length;

  let r = 0;
  let c = 0;

  const visited = new Set();

  while (true) {
    if (r < 0 || r >= rows || c < 0 || c >= cols) return "broken";

    const key = `${r},${c}`;

    if (visited.has(key)) return "loop";

    visited.add(key);

    const cell = factory[r][c];

    if (cell === ".") return "completed";

    if (cell === ">") c++;
    else if (cell === "<") c--;
    else if (cell === "^") r--;
    else if (cell === "v") r++;
  }
}
