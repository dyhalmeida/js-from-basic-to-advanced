/** Objeto literal */
const people = {
  name: "Diego",
  lastname: "Almeida",
  age: 27,
  yearOfBirth() {
    return 2019 - this.age;
  }
};

console.log(`
  ${people.name} ${people.lastname} tem
  ${people.age} anos e nasceu no ano de
  ${people.yearOfBirth()}
`);

/** Função que cria objeto - Factory Object Function */
function createPeople(name, lastname, age) {
  return {
    name,
    lastname,
    age,
    yearOfBirth() {
      return 2019 - this.age;
    },
    greetings() {
      return `
        ${people.name} ${people.lastname} tem
        ${people.age} anos e nasceu no ano de
        ${people.yearOfBirth()}
      `;
    }
  };
}

console.log(createPeople("Marcos", "Lopes", 55));
