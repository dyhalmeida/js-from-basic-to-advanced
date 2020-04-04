class People {
  
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }

  /** 
   * Um método de uma classe já é automáticamente 
   * vinculado ao prototype
   */
  fullName() {
    console.log(`${this.name} ${this.lastname}`);
  }
  
}

const p1 = new People('Diego', 'Almeida');
console.log(p1);
p1.fullName();