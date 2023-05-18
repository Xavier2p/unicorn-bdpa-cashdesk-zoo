class CommandOrder {
    constructor() {
        this.history = [];
        this.order = {};
        this.price = 0;
    }

    execute(command) {
        this.price = command.getPrice();
    }

    undo() {
        const command = this.history.pop();
        command.undo();
    }
}

module.exports = {CommandOrder}