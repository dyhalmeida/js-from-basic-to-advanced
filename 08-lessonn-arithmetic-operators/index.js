/**
 * Arithmetic Operators
 * --------------------
 * + Adiçao
 * - Subtração
 * * Multiplicação
 * ** Potenciação
 * % Resto da divisão
 * ++ incremento
 * -- decremento
 */
const x = 4;
const y = 7;
let z = 2;

console.log(`Adição: ${x} + ${y} = ${x + y}`);
console.log(`Subtração: ${x} - ${y} = ${x - y}`);
console.log(`Multiplicação: ${x} * ${y} = ${x * y}`);
console.log(`Potenciação: ${x} ** ${y} = ${x ** y}`);
console.log(`Resto da divisão ou módulo: ${x} % ${y} = ${x % y}`);
console.log(`Pré-incremento: ++z = ${++z}`);
console.log(`Pós-incremento: z++ = ${z++}`);

/** Quando houver uma multiplicação ou divisão de um
 * number por uma string numerica, a engine tentará converter
 * a string para número. Caso seja uma adição, ocorrerá uma concatenação.
 */

console.log(2 * "2");
console.log(2 / "2");

// Conversão de string para number
console.log(2 * Number("10"));

/** Uma multiplicação, divisão ou exponenciação, ocorrerá
 * um erro NaN (Not a Number)
 */
console.log(2 * "Olá Mundo");
