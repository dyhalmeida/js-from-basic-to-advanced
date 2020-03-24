const primaryNumber = prompt("Digite um número inteiro");
const secondNumber = prompt("Digite outro número inteiro");
const sumResult = Number(primaryNumber) + Number(secondNumber);
alert(`O resultado da soma entre os números é ${sumResult}`);

let varA = "A";
let varB = "B";
let varC = "C";

/**
 * Faça com que:
 * varA seja igual a B
 * varB seja igual a C
 * varC seja igual a A
 */

[varA, varB, varC] = [varB, varC, varA];
alert(`${varA}, ${varB}, ${varC}`);
