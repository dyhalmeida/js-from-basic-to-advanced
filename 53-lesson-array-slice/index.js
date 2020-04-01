/** Fatiando array */

let animals = ['cat', 'dog', 'bird', 'fish'];

// Retorna novo array sem ultimo elemento
let animal = animals.slice(0, -1);
console.log(animal);

// Retorna novo array sem os dois ultimos elemento
animal = animals.slice(0, -2);
console.log(animal);