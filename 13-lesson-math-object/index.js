let num = 9.54578;

/** Arredondar um número para baixo em inteiro */
console.log(Math.floor(num));

/** Arredondar um número para cima em inteiro */
console.log(Math.ceil(num));

/** Arredondar um número para cima ou para baixo em inteiro */
console.log(Math.round(num));

/** Retorna o maior número de uma sequência */
console.log(Math.max(1, 2, 3, 4, 5, -90, 1000));

/** Retorna o menor número de uma sequência */
console.log(Math.min(1, 2, 3, 4, 5, -90, 1000));

/** Gera um número aleatório entre 0 e 1 sendo que o número 1 não se inclui */
console.log(Math.random());

/** Número aleatório entre 1 e 100 */
let random = Math.random() * (1 - 100) + 100;
console.log(Math.round(random));
