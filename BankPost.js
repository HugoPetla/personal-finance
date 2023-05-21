class BankPost {
  constructor(category, type, value) {
    if (type !== "income" && type !== "expense")
      throw new Error("Invalid type");
    if (value < 0) throw new Error("Invalid value");
    if (category === "") throw new Error("Invalid category");
    this.category = category;
    this.type = type;
    this.value = value;
  }
}
