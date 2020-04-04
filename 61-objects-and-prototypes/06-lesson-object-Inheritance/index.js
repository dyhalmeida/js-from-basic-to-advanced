function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.discount = function(value) {
  this.price -= this.price * value / 100;
}

const product = new Product('Mouse', 100);
console.log(product);
product.discount(20);
console.log(product);

/** Aplicando Herança */
function Shirt(name, price, color) {
  Product.call(this, name, price);
  this.color = color;
}

/** Setando o protótipo */
Shirt.prototype = Object.create(Product.prototype);

/** Setando o construtor */
Shirt.prototype.constructor = Shirt;

const shirt = new Shirt('Marvel Gola V', 33.20, 'Preto');
console.log(shirt);
shirt.discount(10);
console.log(shirt);
