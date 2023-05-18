class AdultConcreteCommand {
    constructor(quantity) {
        this.price = 25;
        this.quantity = quantity;
    }

    execute(orders) {
        if (!orders.adults) orders.adults = 0;
        orders.adults += this.quantity;
    }

    undo(orders) {
        if (!orders.adults) return orders.adults = 0;
        orders.adults -= this.quantity;
    }

    get Price() {
        return this.price * this.quantity;
    }
}

// module.exports = { AdultConcreteCommand };
