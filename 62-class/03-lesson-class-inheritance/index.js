class Device {
  constructor(name) {
    this.name = name;
    this.on = false;
  }

  enable() {
    if (this.on) {
      console.log(`${this.name} já está ligado`);
      return;
    }
    this.on = true;
  }

  disable() {
    if (!this.on) {
      console.log(`${this.name} já está desligado`);
      return;
    }
    this.on = false;
  }
}

/** Herança */
class Smartphenablee extends Device {
  constructor(name, color, model) {
    super(name);
    this.color = color;
    this.model = model;
  }
}

/** Herança */
class Tablet extends Device {
  constructor(name) {
    super(name);
    this.wifi = false;
  }

  enableWifi() {
    if (this.wifi) {
      console.log('Wifi já está ligado');
      return;
    }
    this.wifi = true;
  }

  disableWifi() {
    if (!this.wifi) {
      console.log('Wifi já está desligado');
      return;
    }
    this.wifi = false;
  }

  /** Method Override */
  enable() {
    if (this.on) {
      console.log('Tablet');
      console.log(`${this.name} já está ligado`);
      return;
    }
    this.on = true;
  }
}

const meizu = new Smartphenablee('Meizu', 'Cinza', 'M5S');
console.log(meizu);
meizu.enable();
meizu.enable();
meizu.disable();

const samsung = new Tablet('Samsung');
console.log(samsung);
samsung.enable();
samsung.enableWifi();
console.log(samsung);