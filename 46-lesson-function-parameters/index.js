/**
 * Quando uma função é declarada com a palavra reservada "function",
 * fica disponível no seu escopo a palavra reservada "arguments", no
 * qual se encontra todos os argumentos da função mesmo que em sua declaração
 * não seja definida os parâmetros
 */
function example() {
  console.log(arguments); // [Arguments] { '0': 'Diego', '1': 'Almeida' }
  console.log("A function");
}
example("Diego", "Almeida");

function example2(n1 = 3, n2 = 3) {
  console.log(n1 + n2);
}
example2(2, 2);
example2();

/**
 * Passando o parâmetro como undefined
 * o argumento assumirá o seu valor definido,
 * no caso n1 = 3
 * */
example2(undefined, 10);

/** Parâmetros por desestruturação de objeto */
function example3({ name, age }) {
  console.log(name, age);
}
example3({ name: "Diego", age: 28 });

/** Parâmetros por desestruturação de array */
function example4([name, age]) {
  console.log(name, age);
}
example4(["Laura", 4]);
