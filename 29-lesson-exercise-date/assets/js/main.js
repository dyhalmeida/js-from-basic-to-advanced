const date = new Date();
const daysOfTheWeek = [
  "Domingo",
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta Feira",
  "Sexta-Feira",
  "Sábado"
];
const day = daysOfTheWeek[date.getDay()];
const dateOfTheMonth = date.getDate();
const monthsOfTheYear = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
];
const month = monthsOfTheYear[date.getMonth()];
const year = date.getFullYear();
const hour = date.getHours();
const minutes = date.getMinutes();
const addZeroLeft = value => (value >= 10 ? value : `0${value}`);

const h1 = document.querySelector(".container h1");
h1.innerHTML = `${day}, ${dateOfTheMonth} de ${month} de ${year} <br> ${addZeroLeft(
  hour
)}:${addZeroLeft(minutes)}`;
