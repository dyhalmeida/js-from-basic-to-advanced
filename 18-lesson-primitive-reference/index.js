/**
 * Tipos primitivos (imutáveis)
 * string, number, boolean, null, undefined, symbol, bigint
 * */
let message = "Hello World";
console.log(message); // Hello World
console.log(message[0]); // H
message[0] = "P"; // Essa linha não faz absolutamente nada por causa da imutabilidade
console.log(message[0]); // H
console.log(message); // Hello World

let a = "A";
let b = a; // Cópia
/** b não depende de a, pois se trata de cópia e não referência */
console.log(a, b);

/**
 * Tipos não-primitivos (mutáveis)
 * array, object, function
 * */
let aArray = [1, 2, 3];
let bArray = aArray; // Neste caso "b" aponta para o mesmo endereço de memória de "a"
/** Modificando valor de "a", automaticamente é modificado em "b" */
aArray.push(4);
console.log(aArray, bArray);

/** O mesmo serve para object */

/** Para cópiar o valor de "a" para "b" de forma a não ter refência,
 * utiliza-se o operador "spread".
 */
bArray = [...aArray];
aArray.push(5);
console.log(aArray, bArray);
