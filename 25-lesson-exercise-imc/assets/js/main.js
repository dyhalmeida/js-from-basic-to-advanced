const form = document.querySelector(".form-box");
form.addEventListener("submit", e => {
  e.preventDefault();

  const inputWeight = e.target.querySelector(".in-01");
  const inputHeight = e.target.querySelector(".in-02");

  const weight = Number(inputWeight.value);
  const height = Number(inputHeight.value);

  if (!weight) {
    setMessage("Peso inválido", false);
    return;
  }

  if (!height) {
    setMessage("Altura inválida", false);
    return;
  }

  const imc = getImc(weight, height);
  const levelImc = getLevelImc(imc);
  const message = `Seu IMC é: ${imc} (${levelImc})`;
  setMessage(message, true);
});

function createParagraph() {
  return document.createElement("p");
}

function setMessage(message, isValid) {
  const divMessage = document.querySelector(".message");
  divMessage.innerHTML = "";
  const paragraph = createParagraph();
  if (isValid) {
    paragraph.classList.add("sucess");
  } else {
    paragraph.classList.add("fail");
  }

  paragraph.innerHTML = message;
  divMessage.appendChild(paragraph);
}

function getImc(weight, height) {
  return (weight / height ** 2).toFixed(2);
}

function getLevelImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3"
  ];
  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}
