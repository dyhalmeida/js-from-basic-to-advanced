/** Com uso de getter e setter não é necessário
 * utilizar writable e value ao definir uma propriedade */
function People(name, age) {

  Object.defineProperty(this, 'name', {
      enumerable: true,
      configurable: false,
      set: (value) => {
        if (typeof value !== 'string') {
          throw new TypeError('name is not string');
        }
        name = value;
      },
      get: () => {
        return name;
      }
  });

  Object.defineProperty(this, 'age', {
    enumerable: true,
    configurable: false,
    set: (value) => {
      if (typeof value !== 'number') {
        throw new TypeError('age is not number');
      }
      age = value;
    },
    get: () => {
      return age;
    }
  });
}

const diego = new People('Diego', 28);
console.log(diego);
console.log(diego.name);
console.log(diego.age);
diego.age = 29;
console.log(diego.age);