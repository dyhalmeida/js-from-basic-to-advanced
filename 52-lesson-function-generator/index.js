function* generator1() {
  yield 'Valor 01';
  yield 'Valor 02';
  yield 'Valor 03';
}

const gen01 = generator1();
console.log(gen01.next());
console.log(gen01.next().value);

function* generator2() {
  yield function() {
    console.log('yield 01');
  }
  yield function() {
    console.log('yield 02');
  }
  yield function() {
    console.log('yield 03');
  }
}

const gen02 = generator2();
const fn1 = gen02.next().value;
console.log(fn1());


