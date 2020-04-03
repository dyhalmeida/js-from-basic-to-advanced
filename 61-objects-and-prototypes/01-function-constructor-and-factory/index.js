/** Factory Function */
function createProduct(name, price, quantity) {
  return {
    name,
    price,
    quantity
  }
}

console.log(createProduct('Notebook', 2000, 32));


/** Function Constructor */
function People(name, age) {
  this.name = name;
  this.age = age;

  /** Congela o objeto e os torna imutavel */
  // Object.freeze(this);
}

console.log(new People('Diego', 28));