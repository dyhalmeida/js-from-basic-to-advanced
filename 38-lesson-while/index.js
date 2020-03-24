/**
 * While and Do While
 *
 * */

function random(min = 1, max = 50) {
  const value = Math.random() * (max - min) + min;
  return Math.floor(value);
}

let randomValue = random();

/** while */
while (randomValue !== 10) {
  randomValue = random();
  console.log(randomValue);
}

/** Do While */
do {
  randomValue = random();
  console.log(randomValue);
} while (randomValue !== 10);
