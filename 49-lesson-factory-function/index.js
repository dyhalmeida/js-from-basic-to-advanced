// Factory Function
const makePerson = (name, age, weigth, height) => {
  return {
    name,
    age,
    weigth,
    height,
    sayName() {
      return `Hello, my name is ${this.name}`;
    },
    // Passa a ter um comportamento de propriedade
    get imc() {
      return (this.weigth / this.height ** 2).toFixed(2);
    }
  };
};

const diego = makePerson("Diego", 28, 83, 1.73);
console.log(diego);
console.log(diego.sayName());
console.log(diego.imc);
