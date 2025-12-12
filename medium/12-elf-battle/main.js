/**
 * @param {string} elf1 - The moves of the first elf
 * @param {string} elf2 - The moves of the second elf
 * @return {number} - The result of the battle
 */
function elfBattle(elf1, elf2) {
  let life1 = 3;
  let life2 = 3;

  function damage(attacker, defender) {
    if (attacker === "F") return 2;
    if (attacker === "A" && defender !== "B") return 1;
    return 0;
  }

  const rounds = Math.max(elf1.length, elf2.length);

  for (let i = 0; i < rounds; i++) {
    const move1 = elf1[i] || "";
    const move2 = elf2[i] || "";

    const dmgTo2 = damage(move1, move2); 
    const dmgTo1 = damage(move2, move1);

    life1 -= dmgTo1;
    life2 -= dmgTo2;

    if (life1 <= 0 && life2 <= 0) return 0;
    if (life1 <= 0) return 2;
    if (life2 <= 0) return 1;
  }

  if (life1 === life2) return 0;
  return life1 > life2 ? 1 : 2;
}
