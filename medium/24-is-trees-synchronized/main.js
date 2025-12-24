/**
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {
  function isMirror(nodo1, nodo2) {
    if (!nodo1 && !nodo2) return true

    if (!nodo1 || !nodo2) return false
    if (nodo1.value !== nodo2.value) return false

    return (
      isMirror(nodo1.left, nodo2.right) && isMirror(nodo1.right, nodo2.left)
    )
  }

  const sync = isMirror(tree1, tree2)
  return [sync, tree1?.value]
}