class Year {
  constructor(year) {
    this.months = [];
  }

  addMonth(month) {
    this.months.push(month);
  }

  addBankPost(monthName, bankPost) {
    for (const month of this.months) {
      if (month.name === monthName) {
        month.addBankPost(bankPost);
        break;
      }
    }
  }

  calculateBalance() {
    let inicialBalance = 0;
    for (const month of this.months) {
      month.inicialBalance = inicialBalance;
      month.calculateBalance();
      inicialBalance = month.totalizer.balance;
    }
  }
}
