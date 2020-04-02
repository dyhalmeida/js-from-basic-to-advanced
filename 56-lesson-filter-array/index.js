const numbers = [1, 4, 7, 9, 45, 2, 7, 12, 57, 34, 9, 44];

/** Filtra todos os números maior ou igual a 10 */
const nums = numbers.filter(num => num >= 10);
console.log(nums);

const peoples = [
  { name: 'Diego', age: 28 },
  { name: 'Mairo', age: 49 },
  { name: 'João', age: 60 },
  { name: 'Marcos', age: 55 },
  { name: 'Alberto', age: 22 },
  { name: 'Ricardo', age: 33 },
]
/** Filtrar pessoas maiores de 50 anos */
const peoples2 = peoples.filter(people => people.age > 50);
console.log(peoples2);
