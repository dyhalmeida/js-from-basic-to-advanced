/** Destructuring array */

let a = "A"; // B
let b = "B"; // C
let c = "C"; // A

[a, b, c] = [b, c, a];
console.log(a, b, c);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [, n2, , n4, , n6, ...rest] = numbers;
console.log(n2, n4, n6, rest);

const peoples = [
  ["Diego", "Almeida", 27],
  ["Laura", "Anghel", 4],
  ["Isabella", "Almeida", 6]
];

console.log(peoples);
const [diego, [, , idade], [isabella]] = peoples;
console.log(diego, idade);
