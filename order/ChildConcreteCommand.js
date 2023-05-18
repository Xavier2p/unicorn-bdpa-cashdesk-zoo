class ChildConcreteCommand {
    constructor(quantity) {
      this.price = 12;
      this.quantity = quantity;
    }
  
    execute() {}
  
    get getPrice() {
      return this.price * this.quantity;
    }
  }
  