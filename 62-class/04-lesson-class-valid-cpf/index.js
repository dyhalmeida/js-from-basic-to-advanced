class CPF {
  constructor(value) {
    Object.defineProperty(this, 'value', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: value.replace(/\D+/g, '')
    });
    Object.defineProperty(this, 'getDigit', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: function (value) {
        const cpf = Array.from(value);
        let counter = cpf.length + 1;
        const total = cpf.reduce((accumulator, item) => {
          accumulator += (counter * Number(item));
          counter--;
          return accumulator;
        }, 0);

        const digit = 11 - (total % 11);
        return digit > 9 ? '0' : String(digit);
      }
    });
    Object.defineProperty(this, 'isSequence', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: function() {
        return this.value[0].repeat(11) === this.value;
      }
    })
  }

  // getDigit(value) {
  //   const cpf = Array.from(value);
  //   let counter = cpf.length + 1;
  //   const total = cpf.reduce((accumulator, item) => {
  //     accumulator += (counter * Number(item));
  //     counter--;
  //     return accumulator;
  //   }, 0);

  //   const digit = 11 - (total % 11);
  //   return digit > 9 ? '0' : String(digit);
  // }

  // isSequence() {
  //   return this.value[0].repeat(11) === this.value;
  // }

  isValid() {
    
    if (typeof this.value !== 'string') {
      return false;
    }

    if (this.value.length !== 11) {
      return false;
    }

    if (this.isSequence()) {
      return false;
    }

    const value = this.value.slice(0, -2);
    let digit1 = this.getDigit(value);
    console.log(digit1);
    let digit2 = this.getDigit(value + digit1);
    return `${value}${digit1}${digit2}` === this.value;
  }
}

const myCPF = new CPF('498.368.255-41');
console.log(myCPF);
console.log(myCPF.isValid());