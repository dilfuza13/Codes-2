class Account {
  constructor(accname, accno, balance) {
    this.name = accname;
    this.accno = accno;
    this.balance = balance;
    this.transactions = [];
  }

  //Your code here
  deposit(accno) {
    if (accno < 0) {
      return false;
    } else {
      if (this.balance += accno) {
        this.transactions.push(accno)
      }
    }

  }

  withdraw(accno) {
    if (accno < 0) {
      return false;
    } else {
      if (this.balance -= accno) {
        this.transactions.push(accno)
      }
    }
  }

  showBalance() {
    return this.balance;
  }

  accountDetails() {
    return this.transactions;
  }

}

module.exports = { Account };
