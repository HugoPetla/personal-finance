const january = new Month("January");

january.addBankPost(new BankPost("Salary", "income", 3000));
january.addBankPost(new BankPost("Rent", "expense", 1000));
january.addBankPost(new BankPost("Light bill", "expense", 200));
january.addBankPost(new BankPost("Water bill", "expense", 100));
january.addBankPost(new BankPost("Internet", "expense", 100));
january.addBankPost(new BankPost("Transport", "expense", 300));
january.addBankPost(new BankPost("Food", "expense", 500));
january.addBankPost(new BankPost("Fun", "expense", 300));

const february = new Month("February");

february.addBankPost(new BankPost("Salary", "income", 3000));
february.addBankPost(new BankPost("Rent", "expense", 1200));
february.addBankPost(new BankPost("Light bill", "expense", 250));
february.addBankPost(new BankPost("Water bill", "expense", 100));
february.addBankPost(new BankPost("Internet", "expense", 100));
february.addBankPost(new BankPost("Fun", "expense", 500));
february.addBankPost(new BankPost("Food", "expense", 1000));

const year = new Year();
year.addMonth(january);
year.addMonth(february);
year.calculateBalance();

function addElement(parent, elementType, text) {
  const element = document.createElement(elementType);
  if (text) {
    element.innerText = text;
  }
  parent.appendChild(element);
}

function render() {
  const app = document.getElementById("app");
  if (app.firstChild) {
    app.firstChild.remove();
  }
  const painel = document.createElement("div");
  for (const month of year.months) {
    addElement(painel, "h4", month.name);
    for (const bankPost of month.bankPosts) {
      addElement(
        painel,
        "p",
        `${bankPost.type} ${bankPost.category} - ${bankPost.value}`
      );
    }
    addElement(painel, "h3", `Total R$ ${month.totalizer.balance}`);
    addElement(painel, "hr");
  }
  app.appendChild(painel);
}

render();

function addNewBankPost() {
  const month = document.getElementById("month");
  const value = document.getElementById("value");
  const type = document.getElementById("bookPostType");
  const category = document.getElementById("category");
  year.addBankPost(
    month.value,
    new BankPost(category.value, type.value, parseFloat(value.value))
  );
  year.calculateBalance();
  render();
  month.value = "";
  value.value = "";
  type.value = "";
  category.value = "";
}

const buttonAdd = document.getElementById("addBankPost");
buttonAdd.addEventListener("click", addNewBankPost);
console.log(buttonAdd);
