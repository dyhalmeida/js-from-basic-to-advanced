/**
 * Eescreva uma função que recebe 2 número e retorne o maior entre eles
 * */
function max(x, y) {
  return x >= y ? x : y;
}
console.log(max(3, 8));

/**
 * Escreva uma função chamada isLandscape que recebe dois argumentos, width e height
 * e retorne true se a imagem estiver no modo paisagem.
 */
function isLandscape(width, height) {
  return width > height ? true : false;
}
console.log(isLandscape(1080, 800));

/**
 * Escreva uma função que recebe um número e retorne o seguinte:
 * Divisível por 3 = Fizz
 * Divisível por 5 = Buzz
 * Divisível por 3 e 5 = FizzBuzz
 * Não divisível por 3 ou 5 = número
 * Argumento não é um número = NaN
 */

function fizzBuzz(x) {
  if (typeof x !== "number") {
    return NaN;
  }
  if (x % 3 === 0 && x % 5 === 0) {
    return `${x} FizzBuzz`;
  }
  if (x % 3 === 0) {
    return `${x} Fizz`;
  }
  if (x % 5 === 0) {
    return `${x} Buzz`;
  }
  return x;
}

for (let i = 0; i <= 333; i++) {
  console.log(fizzBuzz(i));
}
