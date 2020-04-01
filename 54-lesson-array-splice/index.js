let names = ['Diego', 'Laura'];
console.log(names);

/** Simulando o método Array.push() e adicionado um
 * elemento no final do array
 */ 
 const names01 = [...names];
 names01.splice(names01.length, 0, 'Maria');
 console.log(names01, 'Adiciona elemento no final d array');

 /** Simulando o método Array.pop() e removendo
  * o ultimo elemento do array
  */
 const names02 = [...names];
 names02.splice(names02.length - 1, 1);
 console.log(names02, 'Remove ultimo elemento do array');

 /** Simulando método Array.unshift e adicionando
  * um elemento no inicio do array
  */
 const names03 = [...names];
 names03.splice(0, 0, 'Isabella');
 console.log(names03, 'Adiciona elemento no inicio do array');

 /** Simulando o método Array.shift e removendo
  * primeiro elemento do array
  */
 const names04 = [...names];
 names04.splice(0, 1);
 console.log(names04, 'Remove elemento do inicio do array');