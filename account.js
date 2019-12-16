class BankAccount {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
    this.status = "closed";
  }

  getBalance() {
    return this.balance;
  }

  open() {
    this.status = "open";
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }

  close() {
    this.status = "closed";
  }

  info() {
    return {
      name: this.name,
      balance: this.balance,
      status: this.status
    };
  }
}

module.exports = BankAccount;
