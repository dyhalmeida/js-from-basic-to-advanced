const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const generateCharUpperCase = () => String.fromCharCode(rand(65, 91));
const generateCharLowerCase = () => String.fromCharCode(rand(97, 123));
const generateCharNumber = () => String.fromCharCode(rand(48, 58));
const characters = '!@#$%&*()_-+=[]{}^~/?|<>';
const generateCharSymbol = () => characters[rand(0, characters.length)];

const generatePassword = (quantity, hasUpperCase, hasLowerCase, hasNumber, hasSymbol) => {
  const chars = [];
  quantity = Number(quantity);
  
  for (let i = 0; i < quantity; i++) {
    hasUpperCase && chars.push(generateCharUpperCase());
    hasLowerCase && chars.push(generateCharLowerCase());
    hasNumber && chars.push(generateCharNumber());
    hasSymbol && chars.push(generateCharSymbol());
  }
  return chars.join('').slice(0, quantity);
}

export { generatePassword as default };