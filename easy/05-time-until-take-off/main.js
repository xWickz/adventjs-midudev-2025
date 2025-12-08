/**
 * @param {string} fromTime - The current time in elf format
 * @param {string} takeOffTime - The take off time in elf format
 * @returns {number} The time in seconds until take off
 */

function timeUntilTakeOff(fromTime, takeOffTime) {
  function parseTime(elfostr) {
    const s = elfostr.trim()
    const regex = /^(\d{4})\*(\d{2})\*(\d{2})@(\d{2})\|(\d{2})\|(\d{2})\s*NP$/i
    const m = s.match(regex)

    if (!m) return

    const [, Y, M, D, hh, mm, ss] = m
    const year = Number(Y)
    const month = Number(M)
    const day = Number(D)
    const hour = Number(hh)
    const minute = Number(mm)
    const second = Number(ss)

    const ms = Date.UTC(year, month - 1, day, hour, minute, second)
    return ms
  }

  const fromMs = parseTime(fromTime)
  const takeoffMS = parseTime(takeOffTime)

  const diff = Math.floor((takeoffMS - fromMs) / 1000)
  return diff
}
