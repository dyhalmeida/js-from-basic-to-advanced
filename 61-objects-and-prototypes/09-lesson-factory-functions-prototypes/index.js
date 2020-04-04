const falar = {
  speak: function() {
    console.log(`${this.name} está falando...`);
  }
}

function createPeople(name, age) {

  const prototype = Object.assign({}, falar);

  const obj = Object.create(prototype, {
    name: { value: name },
    age: { value: age }
  })

  return obj;
}

const people = createPeople('Diego', 28);
people.speak();
const people2 = createPeople('Laura', 4);
people2.speak();
