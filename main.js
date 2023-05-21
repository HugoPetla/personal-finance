const january = new Month("January", 0);

january.addBankPost(new BankPosting("Salary", "income", 3000));
january.addBankPost(new BankPosting("Rent", "expense", 1000));
january.addBankPost(new BankPosting("Light bill", "expense", 200));
january.addBankPost(new BankPosting("Water bill", "expense", 100));
january.addBankPost(new BankPosting("Internet", "expense", 100));
january.addBankPost(new BankPosting("Transport", "expense", 300));
january.addBankPost(new BankPosting("Food", "expense", 500));
january.addBankPost(new BankPosting("Fun", "expense", 300));

january.calculateBalance();

console.log(january);
const february = new Month("February", january.totalizer.balance);

february.addBankPost(new BankPosting("Salary", "income", 3000));
february.addBankPost(new BankPosting("Rent", "expense", 1200));
february.addBankPost(new BankPosting("Light bill", "expense", 250));
february.addBankPost(new BankPosting("Water bill", "expense", 100));
february.addBankPost(new BankPosting("Internet", "expense", 100));
february.addBankPost(new BankPosting("Fun", "expense", 500));
february.addBankPost(new BankPosting("Food", "expense", 1000));

february.calculateBalance();

console.log(february);
