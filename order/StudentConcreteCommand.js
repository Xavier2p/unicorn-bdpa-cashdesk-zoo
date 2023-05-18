class StudentConcreteCommand {
    constructor(quantity) {
        this.price = 25;
        this.quantity = quantity;
    }

    execute = (orders) => {
        if (!orders.student) orders.student = 0;
        orders.student += this.quantity;
    }

    undo = (orders) => {
        if (!orders.student) return orders.student = 0;
        orders.student -= this.quantity;
    }

    get Price() { return this.price * this.quantity }
}

// module.exports = { StudentConcreteCommand };
