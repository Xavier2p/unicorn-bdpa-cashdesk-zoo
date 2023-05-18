class StudentConcreteCommand {
    constructor(quantity) {
        this.price = 25;
        this.quantity = quantity;
    }

    execute(orders) {
        if (!orders.students) orders.students = 0;
        orders.students += this.quantity;
    }

    undo(orders) {
        if (!orders.students) return orders.students = 0;
        orders.students -= this.quantity;
    }

    get Price() {
        return this.price * this.quantity;
    }
}

module.exports = { StudentConcreteCommand };
