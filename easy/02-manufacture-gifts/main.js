/**
 * @param {Array<{ toy: string, quantity: number }>} giftsToProduce
 * @returns {string[]} Array of manufactured gifts
 */

function manufactureGifts(giftsToProduce) {
  return giftsToProduce.flatMap((gift) =>
    Array(Math.max(0, gift.quantity)).fill(gift.toy)
  )
}