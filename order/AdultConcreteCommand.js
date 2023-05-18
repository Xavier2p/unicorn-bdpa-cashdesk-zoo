class AdultConcreteCommand {
    constructor(quantity) {
        this.price = 25;
        this.quantity = quantity;
    }

    execute = (orders) => {
        if (!orders.adult) orders.adult = 0;
        orders.adult += this.quantity;
    }

    undo = (orders) => {
        if (!orders.adult) return orders.adult = 0;
        orders.adult -= this.quantity;
    }

    get Price() {
        return this.price * this.quantity;
    }
}

module.exports = { AdultConcreteCommand };
