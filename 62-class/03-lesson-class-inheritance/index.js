class Device {
  constructor(name) {
    this.name = name;
    this.on = false;
  }

  /** Método estático
   * Não possui acesso a método de instância
   * e é somente acessando através da classe
   * diretamente sem ser instânciada.
   * 
   * Objetos instânciados não possui acesso a métodos
   * estáticos
   */
  static manufacturingDate() {
    return new Date();
  }

  /** Métodos de instância */
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

/** Método estático */
console.log(Device.manufacturingDate());

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