/**
 * Desenvolver a seguinte saída no console:
 * Diego Almeida tem 26 anos, pesa 80 kg
 * tem 1.73 de altura e seu IMC é de VALOR DO IMC.
 * Diego Almeida nasceu no ano de 1992.
 *
 * Dica: IMC = peso / (altura x altura)
 */

const name = "Diego Almeida";
const age = 27;
const weightInKilogram = 80;
const heightInMeters = 1.73;
const bodyMassIndex = (
  weightInKilogram /
  (heightInMeters * heightInMeters)
).toFixed(2);
const yearOfBirth = 2019 - age;

// Template String
console.log(`${name} is ${age} years olds, weighs ${weightInKilogram} kg,
he is ${heightInMeters} tall and his IMC is ${bodyMassIndex}.
${name} was born in ${yearOfBirth}`);
