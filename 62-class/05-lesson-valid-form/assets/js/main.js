class ValidForm {
  constructor() {
    this.form = document.querySelector('.form');
    this.events();
  }

  events() {
    this.form.addEventListener('submit', e => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const validFields = this.isValidfields();
    const validPassowords = this.isPasswordValid();

    if(validFields && validPassowords) {
      alert('Formulário enviado.');
      this.form.submit();
    }
  }

  isPasswordValid() {
    let valid = true;

    const password = this.form.querySelector('.password');
    const repeatPassword = this.form.querySelector('.repeat-password');

    if(password.value !== repeatPassword.value) {
      valid = false;
      this.createError(password, 'Campos senha e repetir senha precisar ser iguais.');
      this.createError(repeatPassword, 'Campos senha e repetir senha precisar ser iguais.');
    }

    if(password.value.length < 6 || password.value.length > 12) {
      valid = false;
      this.createError(password, 'Senha precisa estar entre 6 e 12 caracteres.');
    }

    return valid;
  }

  isValidfields() {
    let valid = true;

    for(let errorText of this.form.querySelectorAll('.error-text')) {
      errorText.remove();
    }

    for(let field of this.form.querySelectorAll('.valid')) {

      /** Pega o elemento anterior ao input no caso (label) */
      const label = field.previousElementSibling.innerText;

      if(!field.value) {
        this.createError(field, `Campo "${label}" não pode estar em branco.`);
        valid = false;
      }

      if(field.classList.contains('cpf') && !this.cpfValid(field)) {
        valid = false;
      }

      if(field.classList.contains('user') && !this.userValid(field)) {
        valid = false;
      }

    }

    return valid;
  }

  userValid(field) {
    const user = field.value;
    let valid = true;

    if(user.length < 3 || user.length > 12) {
      this.createError(field, 'Usuário precisa ter entre 3 e 12 caracteres.');
      valid = false;
    }

    if(!user.match(/^[a-zA-Z0-9]+$/g)) {
      this.createError(field, 'Nome de usuário precisar conter apenas letras e/ou números.');
      valid = false;
    }

    return valid;
  }

  cpfValid(field) {
    const cpf = new CPF(field.value);

    console.log(cpf.isValid());

    if(!cpf.isValid()) {
      this.createError(field, 'CPF inválido.');
      return false;
    }

    return true;
  }

  createError(field, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    field.insertAdjacentElement('afterend', div);
  }
}

const validForm = new ValidForm();
