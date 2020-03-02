/**
 * Um array é composto por elementos indexados
 * separados por virgulas
 */

//Índices           0        1        2         3
const namesList = ["Diego", "Laura", "Marcos", "Maria"];

/** Adiciona um item no final no array */
namesList.push("Bruno"); // ["Diego", "Laura", "Marcos", "Maria", 'Bruno'];

/** Adiciona um item no início do array */
namesList.unshift("Bruna");
//["Bruna", "Diego", "Laura", "Marcos", "Maria", "Bruno"];

/** Remove e rotorna último item do array */
const lastItem = namesList.pop();
console.log(lastItem); // Bruno

/** Remove e rotorna primeiro item do array */
const firstItem = namesList.shift();
console.log(firstItem); // Bruna

/**
 * Remove um item do array sem alterar índices.
 * O índice removido se torna undefined
 */
delete namesList[2];
console.log(namesList); // [ 'Diego', 'Laura', <1 empty item>, 'Maria' ]

/** Fatiar array */
console.log(namesList.slice(0, 2)); // [ 'Diego', 'Laura' ]

/**
 * Todo array é um object e para ter certeza que é um array
 * pode utilizar o instaceof
 * */
console.log(namesList instanceof Array); // true
