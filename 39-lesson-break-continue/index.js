/**
 * Break and Continue (while, do while, for, for in, for of)
 * */

const numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

for (let number of numberList) {
  if (number === 8) {
    break;
  }
  if (
    number === 1 ||
    number === 3 ||
    number === 5 ||
    number === 7 ||
    number === 9
  ) {
    continue;
  }
  console.log("par", number);
}
