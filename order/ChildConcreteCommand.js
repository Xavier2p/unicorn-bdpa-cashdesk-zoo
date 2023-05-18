class ChildConcreteCommand {
    constructor(quantity) {
        this.price = 12;
        this.quantity = quantity;
    }

    execute(orders) {
        if (!orders.childs) orders.childs = 0;
        orders.childs += this.quantity;
    }

    undo(orders) {
        if (!orders.childs) return orders.childs = 0;
        orders.childs -= this.quantity;
    }

    get Price() {
        return this.price * this.quantity;
    }
}

module.exports = { ChildConcreteCommand };
