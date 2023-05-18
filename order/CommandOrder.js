class CommandOrder {
    constructor() {
        this.history = [];
        this.order = {};
        this.price = 0;
    }

    execute = (command) => {
        command.execute(this.order);
        this.price += command.Price;
        this.history.push(command);
    }

    undo = () => {
        const command = this.history.pop();
        if (!command) return;
        this.price -= command.Price;
        command.undo(this.order);
    }

    get Price() {
        return this.price;
    }
}

module.exports = { CommandOrder };
