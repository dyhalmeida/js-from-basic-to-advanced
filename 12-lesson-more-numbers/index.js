/** Padrão de precisão dos número IEEE 754-2008 */
let x = 0.7;
let y = 0.1;
let z = 10;

/** Concatenar números */
console.log(x.toString() + y); // 0.70.1

/** Converter número em binário */
console.log(z.toString(2)); // 1010

/** Verifica se um número é inteiro */
console.log(Number.isInteger(x)); // false
console.log(Number.isInteger(z)); // true

/** Verifica se não é um número */
console.log(Number.isNaN(x * "Olá")); // true

/** Corrigindo precisão de casas decimais */
x += y;
x += y;
x += y;

console.log(x); // 1.9000000000000001
console.log(x.toFixed(2)); // 1.00
console.log(Number.isInteger(x.toFixed(2))); // false

// Correção da precisão
x = Number(x.toFixed(2));

console.log(x); // 1
console.log(Number.isInteger(x)); // true
