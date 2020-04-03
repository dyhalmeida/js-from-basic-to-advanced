const numbers = [1, 4, 7, 9, 45, 2, 7, 12, 57, 34, 9, 44];

/** Mapear array e retorna o dobro de cada elemento */
const doubleNumbers = numbers.map(num => num * 2);
console.log(doubleNumbers);

const peoples = [
  { name: 'Diego', age: 28 },
  { name: 'Mairo', age: 49 },
  { name: 'João', age: 60 },
  { name: 'Marcos', age: 55 },
  { name: 'Alberto', age: 22 },
  { name: 'Ricardo', age: 33 },
]
/** Mapear pessoas e retorna array apenas com nomes */
/** Mapear pessoas e retorna array de pesssoas sem os nomes */
/** Mapear pessoas e retorna array de pesssoas com id */
const names = peoples.map(obj => obj.name);
console.log(names);

const newPeoples1 = peoples.map(obj => ({ age: obj.age }));
console.log(newPeoples1);

const newPeoples2 = peoples.map((obj, index)=> ({ id: index + 1,...obj }));
console.log(newPeoples2);

