const BankAccount = require("./account.js");
const account = new BankAccount("karungi", 5000);

// const accounts = []
// accounts.push(account.info())

test("open account with name and an amount of 5000", () => {
  account.open();
  console.log("Account:", account);
  expect(account.status).toBe("open");
  expect(account.name).toBe("karungi");
  expect(account.balance).toBe(5000);
});

test("getBalance of the account", () => {
  expect(account.getBalance()).toBe(5000);
});

test("deposit balance += amount on the account", () => {
  account.deposit(2000);
  expect(account.getBalance()).toBe(7000);
});

test("withdraw balance -= amount on the account", () => {
  const balance = account.getBalance();
  const amount = 1250;
  account.withdraw(amount);
  expect(account.getBalance()).toBe(balance - amount);
});

test("close  the account", () => {
  account.close();
  expect(account.status).toBe("closed");
});
