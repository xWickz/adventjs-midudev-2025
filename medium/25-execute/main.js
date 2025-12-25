/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after ejecutar el programa
 */
function execute(code) {

  function buildJumps(code) {
    const stack = []
    const jumps = new Map()

    for (let i = 0; i < code.length; i++) {
      const c = code[i]
      if (c === '[' || c === '{') {
        stack.push(i)
      } else if (c === ']' || c === '}') {
        const open = stack.pop()
        jumps.set(open, i)
        jumps.set(i, open)
      }
    }

    return jumps
  }

  const jumps = buildJumps(code)
  let value = 0
  let i = 0

  const instructions = {
    '+': () => { value++ },
    '-': () => { value-- },
    '>': () => {},
    '[': () => { if (value === 0) i = jumps.get(i) },
    ']': () => { if (value !== 0) i = jumps.get(i) },
    '{': () => { if (value === 0) i = jumps.get(i) }
  }

  function executeInstruction(char) {
    const fn = instructions[char]
    if (fn) fn()
  }

  while (i < code.length) {
    executeInstruction(code[i])
    i++
  }

  return value
}