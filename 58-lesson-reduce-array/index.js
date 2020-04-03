const numbers = [1, 4, 7, 9, 45, 2, 7, 12, 57, 34, 9, 44];

/** Somar todos os número do array */
/** Retornar um array só com números pares */
/** Retornar um array com dobro dos valores */
const total = numbers.reduce((accumulator, value, index, array) => {
  accumulator += value;
  return accumulator;
}, 0);
// console.log(total);

const pairs = numbers.reduce((accumulator, value) => {
  if (value % 2 === 0) {
    accumulator.push(value);
  }
  return accumulator;
}, []);
// console.log(pairs);

const doubleValues = numbers.reduce((accumulator, value) => {
  accumulator.push(value * 2);
  return accumulator;
}, []);
// console.log(doubleValues);


const peoples = [
  { name: 'Diego', age: 28 },
  { name: 'Mairo', age: 49 },
  { name: 'João', age: 60 },
  { name: 'Marcos', age: 55 },
  { name: 'Alberto', age: 22 },
  { name: 'Ricardo', age: 33 },
]
/** Retornar a pessoa mais velha do array de objetos */
const older = peoples.reduce((accumulator, obj) => {
  if (accumulator.age > obj.age) {
    return accumulator;
  }
  return obj;
});
console.log(older);

