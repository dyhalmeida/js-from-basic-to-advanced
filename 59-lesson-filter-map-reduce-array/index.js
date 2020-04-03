const numbers = [1, 4, 7, 9, 45, 2, 7, 12, 57, 34, 9, 44];

/** Retornar um array só com números pares */
/** Retornar um array com dobro dos valores */
/** Somar todos os número do array */
const total = numbers
  .filter(value => value % 2 === 0)
  .map(value => value * 2)
  .reduce((accumulator, value) => accumulator += value)
console.log(total);

