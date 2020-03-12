/**
 * ? - Condição verdadeira
 * : - Condição false
 */

const score = 678;

/** Bloco If Else */
if (score >= 1000) {
  console.log("VIP");
} else {
  console.log("SIMPLE");
}

/** Operador Ternário */
const profile = score >= 1000 ? "VIP" : "SIMPLE";
console.log(profile); // SIMPLE
