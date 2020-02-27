/**
 * Primitive data types
 * string, number, undefined, null, boolean, symbol
 */

const name = "Diego Almeida"; // string
const age = 27; // number
const heigthInMeters = 1.73; // number
const isMarried = false; // boolean

/** null não aponta para um local na memória */
const working = null;

/** undefined não aponta para um local na memória */
let sleeping;

/** Os tipos de dados primitivos não gera referência na atribuição
 * de dados de uma variável para outra
 */
const year = 2020;
let newYear = year;
newYear = 2021;
console.log(year, newYear);

/** Como exemplo, pode ser citado o tipo de dado por referência como o Array
 * que herda a referência da variável numa atribuição var to var.
 */
// const animals = ["Lion", "Fish"];
// const otherAnimals = animals;

/** Neste momento o array "animals", também receberá um novo elemento também,
 * por possuirem a mesma referência na memória
 */
// otherAnimals.push("Fox");
// console.log(animals, otherAnimals);
// output: [ 'Lion', 'Fish', 'Fox' ] [ 'Lion', 'Fish', 'Fox' ]
