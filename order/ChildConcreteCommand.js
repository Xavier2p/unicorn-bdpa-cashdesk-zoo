class ChildConcreteCommand {
    constructor(quantity) {
        this.price = 12;
        this.quantity = quantity;
    }

    execute(orders) {
        if (!orders.child) orders.child = 0;
        orders.child += this.quantity;
    }

    undo(orders) {
        if (!orders.child) return orders.child = 0;
        orders.child -= this.quantity;
    }

    get Price() {
        return this.price * this.quantity;
    }
}

// module.exports = { ChildConcreteCommand };
