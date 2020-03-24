const elements = [
  { tag: "p", text: "Frase 1" },
  { tag: "div", text: "Frase 2" },
  { tag: "section", text: "Frase 3" },
  { tag: "footer", text: "Frase 4" }
];
const container = document.querySelector(".container");
const div = document.createElement("div");

for (let index = 0; index < elements.length; index++) {
  const { tag, text } = elements[index];
  const element = document.createElement(tag);
  const textNode = document.createTextNode(text);
  element.appendChild(textNode);
  div.appendChild(element);
}

container.appendChild(div);
