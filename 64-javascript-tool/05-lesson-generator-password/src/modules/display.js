import generatePassword from './generate';

const display = document.querySelector('.display');
const quantity = document.querySelector('.input-quantity');
const hasUpperCase = document.querySelector('.chk-uppercase');
const hasLowerCase = document.querySelector('.chk-lowercase');
const hasNumber = document.querySelector('.chk-number');
const hasSymbol = document.querySelector('.chk-symbol');
const buttonGenerate = document.querySelector('.generate');

const generate = () => {
  const password =  generatePassword(
    quantity.value,
    hasUpperCase.checked,
    hasLowerCase.checked,
    hasNumber.checked,
    hasSymbol.checked
  );
  return password || 'Defina uma quantidade e selecione no mínimo uma opção abaixo';
}

export default () => {
  buttonGenerate.addEventListener('click', () => {
    display.value = generate();
  });
}
