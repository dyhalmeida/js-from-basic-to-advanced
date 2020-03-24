/**
 * O bloco try catch server para tratamentos de erros.
 * O bloco try tenta executar o código, caso há um erro,
 * é lançada uma execeção que cai ara o bloco catch.
 * Já o bloco finally sempre é executado.
 */

function max(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new TypeError("X ou Y, não é do tipo number");
  }
  return x > y ? x : y;
}

try {
  console.log(max("2", 9));
} catch (error) {
  console.error("Ops, houve um erro desconhecido");
} finally {
  console.log("Fim");
}
