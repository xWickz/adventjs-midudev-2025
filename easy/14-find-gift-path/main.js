/**
 * @param {object} workshop - A representation of the workshop
 * @param {string|number|boolean} gift - The gift to find
 * @returns {number[]} The path to the gift
 */
function findGiftPath(workshop, gift) {
  function search(currentObj, path) {
    for (const key in currentObj) {
      const value = currentObj[key]

      // Si encontramos el valor exacto
      if (value === gift) {
        return [...path, key]
      }

      // Si es un objeto, seguimos buscando dentro
      if (typeof value === 'object' && value !== null) {
        const result = search(value, [...path, key])
        if (result.length > 0) return result
      }
    }

    return []
  }

  return search(workshop, [])
}