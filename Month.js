class Month {
  constructor(name) {
    if (name === "") throw new Error("Invalid month");

    this.name = name;
    this.inicialBalance = 0;
    this.totalizer = {
      balance: 0,
      totalIncome: 0,
      totalExpense: 0,
      income: 0,
      fees: 0,
      feeDistribution: []
    };
    this.bankPosts = [];
  }

  calculateBalance() {
    console.log(this.name);
    this.totalizer = {
      balance: 0,
      totalIncome: 0,
      totalExpense: 0,
      income: 0,
      fees: 0,
      feeDistribution: []
    };
    this.totalizer.balance = roundValues(
      this.bankPosts.reduce((accumulator, currentValue) => {
        if (currentValue.type === "expense") {
          this.totalizer.totalExpense += currentValue.value;
          return accumulator - currentValue.value;
        }
        if (currentValue.type === "income") {
          this.totalizer.totalIncome += currentValue.value;
          return accumulator + currentValue.value;
        }
      }, this.inicialBalance)
    );

    this.calculateDistributionOfFees();
    this.gatherFee();
    this.gatherIncome();
  }

  addBankPost(bankPost) {
    this.bankPosts.push(bankPost);
  }

  calculateDistributionOfFees() {
    const feeDistribution = [];
    for (const bankPost of this.bankPosts) {
      if (bankPost.type === "expense") {
        const percentage = roundValues(
          (bankPost.value / this.totalizer.totalExpense) * 100
        );
        feeDistribution.push({
          category: bankPost.category,
          percentage
        });
      }
    }
    this.totalizer.feeDistribution = feeDistribution;
  }

  calculateFee(salary) {
    return roundValues(salary * 0.1);
  }

  calculateIncome(salary) {
    return roundValues(salary * 0.005);
  }

  gatherFee() {
    if (this.totalizer.balance < 0) {
      const fees = this.calculateFee(this.totalizer.balance);
      this.totalizer.fees = fees;
      this.totalizer.balance += fees;
    }
  }

  gatherIncome() {
    if (!(this.totalizer.balance < 0)) {
      const income = this.calculateIncome(this.totalizer.balance);
      this.totalizer.income = income;
      this.totalizer.balance += income;
    }
  }
}
