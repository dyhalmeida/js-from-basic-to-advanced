const name = prompt("Digite o seu nome completo");
document.body.innerHTML += `Seu nome é: ${name}<br>`;
document.body.innerHTML += `Seu nome tem ${
  name.replace(" ", "").length
} letras <br>`;
document.body.innerHTML += `A segunda letra do seu nome é: ${name.charAt(
  1
)}<br>`;
document.body.innerHTML += `Qual o primeiro índice da letra I no seu nome? ${name.indexOf(
  "i"
)} <br>`;
document.body.innerHTML += `Qual o último índice da letra I no seu nome? ${name.lastIndexOf(
  "i"
)} <br>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${name.slice(
  -3
)} <br>`;
document.body.innerHTML += `As palavras do seu nome são: ${name.split(
  " "
)}<br>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${name.toUpperCase()} <br>`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${name.toLowerCase()} <br>`;
