function caculateBaskara(coefficientA = 4, coefficientB = 8, coefficientC = 2) {
  if (coefficientA === 0) {
    console.log("Não é uma equação do segundo grau!");
    return;
  }
  const delta = coefficientB * coefficientB - 4 * coefficientA * coefficientC;
  if (delta < 0) {
    console.log("Não tem raízes reais!");
    return;
  }

  if (delta === 0) {
    console.log(`Só tem uma raiz: ${(-coefficientB / 2) * coefficientA}`);
    return;
  }
  console.log(`
  Tem duas raízes.
  X1: ${-coefficientB + (Math.sqrt(delta) / 2) * coefficientA}
  X2: ${-coefficientB - (Math.sqrt(delta) / 2) * coefficientA}
  `);
}

caculateBaskara(4, 8, 2);

/** Modos de criar funções */

// Função anônima
const soma = function(x = 1, y = 1) {
  return x + y;
};

// Arrow Function
const raiz = x => x ** 0.5;
const soma2 = (x = 1, y = 1) => x + y;
