/**
 * Avaliação de curto-circuito
 * && - And
 * Utilizando operador && a avaliação é finalizada
 * ao enocontrar a primeira expressão (false), ignorando todo o resto e
 * retorna o (valor booleano false).
 * Porém se toda a expressão for (true), a avaliação retorna o último valor
 * da expressão
 *
 * || - Or
 * Utilizando operador || a avaliação retorna o primeiro valor (true) de toda a expressão
 * existir um valor (true).
 * Se todos valores forem falso, é retornado o ultimo valor falso
 *
 * Valores avaliados em FALSY
 * false, 0, "", '', ``, null, undefined, NaN
 *
 */

/** retorna o primeiro valor false e encerra a avaliação */
console.log(10 && 0 && "Diego"); // 0
console.log(10 && false && "Diego"); // false

/** Retorna o último valor true => "Diego" */
console.log(10 && 28 && "Diego"); // Diego

function message() {
  return "Hello World";
}

/** Exemplo de curto-circuito com &&(And) */
let value = null;
console.log(value && message()); // null

value = "OK";
console.log(value && message()); // Hello World

/** Exemplo de curto-circuito com ||(Or) */
let userColor = null;
let colorDefault = userColor || "red";
console.log(colorDefault); // red

userColor = "blue";
colorDefault = userColor || "red";
console.log(colorDefault); // blue
