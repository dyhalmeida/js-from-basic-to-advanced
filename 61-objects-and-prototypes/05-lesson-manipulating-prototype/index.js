const objA = {
  keyA: 'A'
}
console.log(objA);

const objB = {
  keyB: 'B'
}
console.log(objB);
Object.setPrototypeOf(objB, objA);
console.log(objB.keyA); // A

const objC = {
  keyC: 'C'
}
Object.setPrototypeOf(objC, objB);
console.log(objC.keyA); // A

function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.discount = function(value) {
  this.price = this.price - ((this.price * value) / 100);
}

Product.prototype.increase = function(value) {
  this.price = this.price + ((this.price * value) / 100);
}

const p1 = new Product('Mouse', 23,8);
console.log(p1);
p1.discount(100);
console.log(p1);

const p2 = {
  name: 'TV',
  price: 1000
}

Object.setPrototypeOf(p2, Product.prototype);
console.log(p2);
p2.increase(20);
console.log(p2);
