/**
 * Javascript é baseado em protótipos para passar propriedades
 * e métodos de um objeto para outro.
 * 
 * Definição de Protótipo
 * É um termo usado para se referir ao que foi criado pela primeira vez,
 * servido de modelo ou molde para futuras produções.
 * 
 * Todos os objetos tem uma referência interna para um protótipo (__proto__)
 * que vem da propriedade prototype da função construtora que foi usada para cria-lo.
 * Quando tentamos acessar uma propriedade de um objeto, primeiro o motor do Javascript vai
 * tentar encontrar esta propriedade no próprio objeto e depois a cadeia de protótipos
 * é usada até o topo (null) até encontrar ou não tal propriedade.
 */

 function Product(description, price) {
   this.description = description;
   this.price = price;
 }


 Product.prototype.getKeys = function() {
   return Object.keys(this);
 }

 Product.prototype.getValues = function() {
   return Object.values(this);
 }

  /**
  * Product: {
  *   description,
  *   price,
  *   __proto__: {
  *     getKeys,
  *     getValues,
  *   }
  * }
  */

 const product = new Product('Mouse', 23.90);
 console.log(product.getKeys());
 console.log(product.getValues());