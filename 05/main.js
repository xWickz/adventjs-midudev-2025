/**
 * Los elfos tienen un timestamp secreto: es la fecha y hora exacta en la que Papá Noel despega con el trineo 🛷 para repartir regalos por el mundo. Pero en el Polo Norte usan un formato rarísimo para guardar la hora: YYYY*MM*DD@HH|mm|ss NP (ejemplo: 2025*12*25@00|00|00 NP).

Tu misión es escribir una función que reciba:

fromTime → fecha de referencia en formato elfo (YYYY*MM*DD@HH|mm|ss NP).
takeOffTime → la misma fecha de despegue, también en formato elfo.
La función debe devolver:

Los segundos completos que faltan para el despegue.
Si ya estamos en el despegue exacto → 0.
Si el despegue ya ocurrió → un número negativo indicando cuántos segundos han pasado desde entonces.
🎯 Reglas
Convierte el formato elfo a un timestamp primero. El sufijo NP indica la hora oficial del Polo Norte (sin husos horarios ni DST), así que puedes tratarlo como si fuera UTC.
Usa diferencias en segundos, no en milisegundos.
Redondea siempre hacia abajo (floor): solo segundos completos.
🧩 Ejemplos
const takeoff = '2025*12*25@00|00|00 NP'

// desde el 24 diciembre 2025, 23:59:30, 30 segundos antes del despegue
timeUntilTakeOff('2025*12*24@23|59|30 NP', takeoff)
// 30

// justo en el momento exacto
timeUntilTakeOff('2025*12*25@00|00|00 NP', takeoff)
// 0

// 12 segundos después del despegue
timeUntilTakeOff('2025*12*25@00|00|12 NP', takeoff)
// -12
 */

/**
 * @param {string} fromTime - The current time in elf format
 * @param {string} takeOffTime - The take off time in elf format
 * @returns {number} The time in seconds until take off
 */


function timeUntilTakeOff(fromTime, takeOffTime) {
  function parseTime(elfostr) {
    const s = elfostr.trim();
    const regex = /^(\d{4})\*(\d{2})\*(\d{2})@(\d{2})\|(\d{2})\|(\d{2})\s*NP$/i;
    const m = s.match(regex);

    if (!m) return;

    const [, Y, M, D, hh, mm, ss] = m;
    const year = Number(Y);
    const month = Number(M);
    const day = Number(D);
    const hour = Number(hh);
    const minute = Number(mm);
    const second = Number(ss);

    const ms = Date.UTC(year, month - 1, day, hour, minute, second);
    return ms;
  }
  const fromMs = parseTime(fromTime);
  const takeoffMS = parseTime(takeOffTime);

  const diff = Math.floor((takeoffMS - fromMs) / 1000);
  return diff;
}

/**
 * Revisión de código: 5/5
Puntos fuertes:
• La solución es muy clara, concisa y fácil de entender.
• El uso de una función anidada `parseTime` encapsula la lógica de parsing de manera efectiva, mejorando la legibilidad y la modularidad del código.
• La conversión a UTC (`Date.UTC`) y el manejo de los meses (0-indexados) son correctos.
• La lógica para calcular la diferencia en segundos y redondear hacia abajo (`Math.floor`) es precisa y cumple con los requisitos del problema.
• El código es eficiente, utilizando operaciones nativas para el manejo de fechas y expresiones regulares para el parsing.
 */