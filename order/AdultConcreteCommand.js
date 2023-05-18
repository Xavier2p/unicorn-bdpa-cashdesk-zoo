class AdultConcreteCommand {
    constructor(quantity) {
        this.price = 25;
        this.quantity = quantity;
    }

    execute() {}

    get getPrice() {
        return this.price * this.quantity;
    }
}

module.exports = { AdultConcreteCommand };
