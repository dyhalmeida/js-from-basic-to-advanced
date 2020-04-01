/** Concatenando arrays com método Array.concat() */
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = arr1.concat(arr2);
console.log(arr3, 'Method concat()');

/** Concatenando arrays com spread operator / rest */
const arr4 = [...arr1, ...arr2];
console.log(arr4, 'Spread operator');
