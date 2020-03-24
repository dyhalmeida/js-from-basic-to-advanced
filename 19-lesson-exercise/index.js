function main() {
  const dataList = [];
  const output = document.querySelector(".output");
  const form = document.querySelector(".form");

  function handleSubmitButton(e) {
    e.preventDefault();
    const name = this.querySelector(".name");
    const lastname = this.querySelector(".lastname");
    const weight = this.querySelector(".weight");
    const height = this.querySelector(".height");

    dataList.push({
      name: name.value,
      lastname: lastname.value,
      weight: weight.value,
      height: height.value
    });
    console.log(dataList);
    output.innerHTML += `
      <p>Nome: ${name.value} ${lastname.value}, Peso: ${weight.value}, Altura: ${height.value}</p>
    `;
  }
  form.addEventListener("submit", handleSubmitButton);
}

main();
