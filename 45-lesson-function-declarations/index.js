/**
 * Funções declaradas com a palavras reservada "function"
 * ocorre o hoisting (eleva funções e váriáveia ao topo do escopo)
 */

// Chamada antes da declaração
message();

// Pode ser declarada depois da sua chamada
function message() {
  console.log("Hello World");
}

/**
 * Funções são objetos de primeira classe (First-class Objects)
 * Ou seja funções pode ser tratada como dado assim como váriáveis
 */
const showMessage = function() {
  console.log("Hello World");
};
showMessage();

/** Funções podem ser passadas como parâmetro de outra função */
function exec(callback) {
  callback();
}
exec(showMessage);

/**
 * Outra maneira de declarar funções é a arrow-function
 */
const presentMessage = () => console.log("Hello World Arrow");
presentMessage();

/**
 * Funções declaradas dentro de objetos
 */

const people = {
  speak() {
    console.log("speaking");
  }
};
people.speak();
