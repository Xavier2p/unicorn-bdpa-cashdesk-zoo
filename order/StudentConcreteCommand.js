class StudentConcreteCommand {
    constructor(quantity) {
      this.price = 10;
      this.quantity = quantity;
    }
  
    execute() {}
  
    get getPrice() {
      return this.price * this.quantity;
    }
  }
  