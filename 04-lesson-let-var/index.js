/**
 * Variáveis let:
 * Possuem escopo.
 * Pode ser declarada sem atribuição de valor.
 * Não pode ser redeclarada.
 * Pode ter uma retribuição de valor.
 */

let maleName = "John";
let femaleName = "Maria";
let sonName = "Eduardo";

console.log(maleName);
maleName = "Peter";

console.log(`
  ${maleName} was born in 1984.
  In 2000 ${maleName} met ${femaleName}.
  ${maleName} married ${femaleName} in 2012.
  ${femaleName} had 1 child with ${maleName} in 2015.
  ${maleName}'s son is called ${sonName}.
`);
