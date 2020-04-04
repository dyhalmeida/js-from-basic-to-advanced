/** Hack para gerar uma propriedade privada */
const _velocity = Symbol('velocity');

class Car {
  constructor(name) {
    this.name = name;
    this[_velocity] = 0;
  }

  get velocity() {
    return this[_velocity];
  }
  set velocity(value) {
    if (typeof value !== 'number') return;
    if (value > 100 || value < 0) return;
    this[_velocity] = value;
  }

  speedUp() {
    if (this[_velocity] >= 100) return;
    this[_velocity]++;
  }

  break() {
    if (this[_velocity] <= 0) return;
    this[_velocity]--;
  }
}

const uno = new Car('Uno');
uno.speedUp();
uno.speedUp();
console.log(uno.velocity);
uno.velocity = 200;
console.log(uno.velocity);
uno.velocity = 100;
console.log(uno.velocity);


