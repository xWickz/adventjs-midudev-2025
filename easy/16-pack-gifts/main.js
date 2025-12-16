/**
 * @param {number[]} gifts - The gifts to pack
 * @param {number} maxWeight - The maximum weight of the sleigh
 * @returns {number | null} The number of sleighs needed
 * Return null if no sleigh can carry all the gifts
 */
function packGifts(gifts, maxWeight) {
  let sleighs = 0;
  let current = 0;

  for (let i = 0; i < gifts.length; i++) {
    if (gifts[i] > maxWeight) return null;

    if (current + gifts[i] > maxWeight) {
      sleighs++;
      current = gifts[i];
    } else {
      current += gifts[i];
    }
  }

  if (current > 0) sleighs++;
  return sleighs;
}
