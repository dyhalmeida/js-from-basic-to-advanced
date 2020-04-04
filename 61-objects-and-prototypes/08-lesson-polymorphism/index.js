/** Super Class */
function Account(agency, account, balance) {
  this.agency = agency;
  this.account = account;
  this.balance = balance;
}

Account.prototype.setBalance = function(value) {
  this.balance += value;
  this.showBalance();
}

Account.prototype.getBalance = function(value) {
  if (value > this.balance) {
    console.log('Saldo insuficiente');
    this.showBalance();
    return;
  }
  this.balance -= value;
  this.showBalance();
}

Account.prototype.showBalance = function() {
  console.log(`
    Ag/c: ${this.agency}/${this.account}
    Saldo: R$ ${this.balance.toFixed(2)}
  `);
}

/** Conta corrente */
function CC(agency, account, balance, limit) {
  Account.call(this, agency, account, balance);
  this.limit = limit;
}
CC.prototype = Object.create(Account.prototype);
CC.prototype.constructor = CC;

/** Polimorfismo: Method Override */
CC.prototype.getBalance = function(value) {
  if (value > (this.balance + this.limit)) {
    console.log('Saldo insuficiente');
    this.showBalance();
    return;
  }
  this.balance -= value;
  this.showBalance();
}

function CP(agency, account, balance) {
  Account.call(this, agency, account, balance);
}
CP.prototype = Object.create(Account.prototype);
CP.prototype.constructor = CP;

/** Conta corrente */
const accountCurrent = new CC('0826', '0702258', 2300, 1000);
console.log(accountCurrent);
accountCurrent.setBalance(200);
console.log(accountCurrent);
accountCurrent.getBalance(3550);
console.log(accountCurrent);

/** Conta Poupança */
const accountSavings = new CP('0821', '08934276', 3000);
console.log(accountSavings);
accountSavings.setBalance(10);
console.log(accountSavings);
accountSavings.getBalance(3100);
console.log(accountSavings);
accountSavings.getBalance(3010);
console.log(accountSavings);


