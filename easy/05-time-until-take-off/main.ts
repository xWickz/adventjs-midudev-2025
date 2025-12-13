type ElfDateTime =
  `${number}*${number}*${number}@${number}|${number}|${number} NP`

function timeUntilTakeOff(
  fromTime: ElfDateTime,
  takeOffTime: ElfDateTime
): number {

  function parseTime(s: ElfDateTime): number {
    const regex = /^(\d{4})\*(\d{2})\*(\d{2})@(\d{2})\|(\d{2})\|(\d{2})\s*NP$/i;
    const m = s.trim().match(regex);

    if (!m) {
      throw new Error("Invalid Elf NP datetime format");
    }

    const [, Y, M, D, hh, mm, ss] = m;
    const year = Number(Y);
    const month = Number(M);
    const day = Number(D);
    const hour = Number(hh);
    const minute = Number(mm);
    const second = Number(ss);

    return Date.UTC(year, month - 1, day, hour, minute, second);
  }

  const fromMs = parseTime(fromTime);
  const takeoffMS = parseTime(takeOffTime);

  return Math.floor((takeoffMS - fromMs) / 1000);
}