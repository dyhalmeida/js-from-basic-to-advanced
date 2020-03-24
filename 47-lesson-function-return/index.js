/** Funções podem retornar dados primitivos */
const result = sum(2, 2);
console.log(result); // 4
function sum(x = 0, y = 0) {
  return x + y;
}

/** Funções podem retornar dados não primitivos */
const person = createPerson();
console.log(person); // { name: 'Diego', lastname: 'Almeida', age: 28 }
function createPerson(name = "Diego", lastname = "Almeida", age = 28) {
  return { name, lastname, age };
}

/** Funções podem retornar funções */
function createMultiplier(multiplier) {
  return function(value) {
    return value * multiplier;
  };
}

const doubleValue = createMultiplier(2);
const triplesValue = createMultiplier(3);
const quadrupleValue = createMultiplier(4);
console.log(doubleValue(10)); // 20
console.log(triplesValue(10)); // 30
console.log(quadrupleValue(10)); // 40
