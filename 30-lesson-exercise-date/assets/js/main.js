const date = new Date();
const options = {
  dateStyle: "full",
  timeStyle: "short"
};
const locale = "pt-BR";
const dateFull = date.toLocaleDateString(locale, options);

const h1 = document.querySelector(".container h1");
// console.log(typeof dateFull);
h1.innerHTML = `${dateFull}`;
