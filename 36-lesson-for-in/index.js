/** For in read index of array or key of object */
const fruits = ["Grapes", "Apple", "Watermelon", "Banana", "Pineapple"];
const user = { email: "user@email.com", password: "******" };

/** Reading index of array with "For In" */
for (let index in fruits) {
  console.log(fruits[index]);
}

/** Reading key of object with "For In" */
for (let key in user) {
  console.log(user[key]);
}
