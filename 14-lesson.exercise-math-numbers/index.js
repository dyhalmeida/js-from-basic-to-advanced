const x = Number(prompt("Digite um número"));
const spanNum = document.getElementById("num");
const divText = document.getElementById("text");

spanNum.innerHTML = x;
divText.innerHTML = `
<p>Raiz quadrada: ${Math.sqrt(x)}</p>
<p>O número é um inteiro? ${Number.isInteger(x)}</p>
<p>O número é um NaN? ${Number.isNaN(x)}</p>
<p>O número arredondado para baixo: ${Math.floor(x)}</p>
<p>O número arredondado para cima: ${Math.ceil(x)}</p>
<p>O número com duas casas decimais: ${x.toFixed(2)}</p>
`;
