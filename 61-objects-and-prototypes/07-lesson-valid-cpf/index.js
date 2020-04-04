/** Validação de CPF */
/** 911.090.525-10 */
/**
 * 9 x 10 = 0
 * 1 x 9 = 54
 * 1 x 8 = 40
 * 0 x 7 = 56
 * 9 x 6 = 12
 * 0 x 5 = 20
 * 5 x 4 = 8
 * 2 x 3 = 3
 * 55 x 2 = 10
 * 
 * Total = 197
 * Calculo: 11 - (197 % 11) = 6
 * 
 */

function CPF(cpf) {
  Object.defineProperty(this, 'clear', {
    enumerable: true,
    configurable: false,
    get: function () {
      return cpf.replace(/\D+/g, '');
    }
  })
}

CPF.prototype.getDigit = function (value) {
  const cpfArr = Array.from(value);
  let counter = cpfArr.length + 1;
  const total = cpfArr.reduce((accumulator, item) => {
    accumulator += (counter * Number(item));
    counter--;
    return accumulator;
  }, 0);
  const digit = 11 - (total % 11);
  return digit > 9 ? '0': String(digit);
}

CPF.prototype.isSequence = function() {
  const sequence = this.clear[0].repeat(this.clear.length);
  return sequence === this.clear.length;
}

CPF.prototype.isValid = function() {

  if (typeof this.clear === 'undefined') {
    return false;
  }

  if (this.clear.length !== 11) {
    return false;
  }

  if (this.isSequence()) {
    return false;
  }

  const cpf = this.clear.slice(0, -2);
  const digit1 = this.getDigit(cpf);
  const digit2 = this.getDigit(cpf + digit1);
  const newCpf = cpf + digit1 + digit2;
  return newCpf === this.clear;
}

const cpf1 = new CPF('498.368.255-41');
const cpf2 = new CPF('911.090.525-10');
console.log(cpf1.isValid());
console.log(cpf2.isValid());
