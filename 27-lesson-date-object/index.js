/**
 * O objeto Date possui 3 construtores
 * new Date() - Controi um objeto com data e hora atual
 *
 * new Date(dataNumber)
 * - dataNumber representa o número de milissegundos desde 1 de Janeiro de 1970 00:00:00 UTC (Era Unix ou Marco * Zero).
 *
 * new Date(dataString);
 * - Um valor do tipo String que representa uma data. A string deverá estar uma formato reconhecido pelo
 * método Date.parse() (IETF-compliant RFC 2822 timestamps e também uma versão da ISO8601).
 *
 * new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);
 * ano - Um valor inteiro que representa o ano. Valores de 0 a 99 correspondem aos anos de 1900 a 1999
 * mês - Um valor inteiro que representa o mês, começando com 0 para Janeiro até 11 para Dezembro.
 * dia - Um valor inteiro que representa o dia do mês.
 * hora - Um valor inteiro que representa a hora do dia.
 * minuto - Um valor inteiro que representa o segmento de um minuto de tempo.
 * segundo - Um valor inteiro que representa o segmento de segundo do tempo.
 * milissegundo - Um valor inteiro que representa o segmento de milisegundo do tempo.
 */

const addHour = (value = 1) => 60 * 60 * value * 1000;

let data = new Date();
console.log(data); // 2020-01-29T19:10:06.415Z
console.log(data.toString()); // Wed Jan 29 2020 16:11:10 GMT-0300 (GMT-03:00)

data = new Date(0 + addHour(3));
console.log(data.toString()); // Wed Dec 31 1969 21:00:00 GMT-0300 (GMT-03:00)

data = new Date(Date.now() + addHour(24));
console.log(data.toLocaleString()); // 2020-1-30 4:23:19 PM

/** Formatos mais utilizado */
data = new Date("1992-02-21 08:00:00");
data = new Date("1992-02-21T08:20:23.100");

console.log("Dia", data.getDate());

/**
 * 0 - Janeiro
 * 1 - Fevereiro
 * 2 - Março
 * 3 - Abril
 * 4 - Maio
 * 5 - Junho
 * 6 - Julho
 * 7 - Agosto
 * 8 - Setembro
 * 9 - Outubro
 * 10 - Novembro
 * 11 - Dezembro
 */
console.log("Mês", data.getMonth());

console.log("Ano", data.getFullYear());
console.log("Hora", data.getHours());
console.log("Minuto", data.getMinutes());
console.log("Segundo", data.getSeconds());
console.log("Milissegundo", data.getMilliseconds());

/**
 * 0 - Domingo
 * 1 - Segunda
 * 2 - Terça
 * 3 - Quarta
 * 4 - Quinta
 * 5 - Sexta
 * 6 - Sábado
 */
console.log("Dia da Semana", data.getDay());

/** Obter os mileseconds da data */
console.log(Date.now());
