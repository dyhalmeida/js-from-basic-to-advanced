function createCalculator() {
  return {
    display: document.querySelector('.display'),


    init() {
      this.display.focus();
      this.getClick();
      this.executeEnter();
    },

    getClick() {
      document.addEventListener('click', function(e) {

        const element = e.target;
        
        if (element.classList.contains('btn-char')) {
          this.setDisplay(element);
        }

        if (element.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if (element.classList.contains('btn-del')) {
          this.delChar();
        }

        if (element.classList.contains('btn-equal')) {
          this.execute();
        }


      }.bind(this));
    },

    setDisplay(element) {
      this.display.value += element.innerText;
      this.display.focus();
    },

    clearDisplay() {
      this.display.value = '';
      this.display.focus()
    },

    delChar() {
      this.display.value = this.display.value.slice(0, -1);
      this.display.focus();
    },

    execute() {
      try {
        const value = eval(this.display.value);
        if (!value) {
          return alert('Operação inválida');
        }
        this.display.value = value;
        this.display.focus();
      } catch (error) {
        return alert('Operação inválida');
      }
    },

    executeEnter() {
      document.addEventListener('keyup', function(e) {
        if (e.keyCode === 13) {
          this.execute();
        }
      }.bind(this));
    }


  }
}

const calculator = createCalculator();
calculator.init();