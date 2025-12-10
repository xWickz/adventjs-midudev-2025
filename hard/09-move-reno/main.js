function moveReno(board, moves) {
  const grid = board.split("\n").slice(1, -1);
  let i = grid.findIndex((row) => row.includes("@"));
  let j = grid[i].indexOf("@");

  const delta = { U: [-1, 0], D: [1, 0], L: [0, -1], R: [0, 1] };
  for (const move of moves.split("")) {
    const [iof, jof] = delta[move];
    i += iof;
    j += jof;

    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[0].length ||
      grid[i][j] === "#"
    )
      return "crash";

    if (grid[i][j] === "*") return "success";
  }
  return "fail";
}
