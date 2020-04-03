function People(name, age) {
  Object.defineProperty(this, 'name', {
    value: name, // valor da propriedade
    enumerable: true, // Enumeravel
    configurable: false, // Não permite reconfigurar
    writable: false // Não permite rescrita na propriedade
  });

  Object.defineProperty(this, 'age', {
    value: age,
    enumerable: true,
    configurable: false,
    writable: true
  });
}

const people = new People('Diego', 28);
console.log(people);

people.name = 'Almeida'; // Não altera o valor devido a propriedade writable
people.age = 29;
console.log(people); // Altera valor devido a propriedade writable

function People2(name, age) {
  Object.defineProperties(this, {
    name: {
      value: name,
      enumerable: true,
      configurable: false,
      writable: true
    },
    age: {
      value: age,
      enumerable: true,
      configurable: false,
      writable: false
    }
  });
}

const people2 = new People2('Laura',4);
console.log(people2);
people2.name = 'Isabella';
people2.age = 6;
console.log(people2);