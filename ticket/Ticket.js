const { database } = require('../DatabaseSingleton');

class Ticket {
    constructor(type, id) {
        this.type = type;
        this.id = id;
        this.isUsed = false;
    }

    useTicket = () => {
        this.isUsed = true;
    };

    save = () => {
        database.tickets.push(this);
    };

    print = () => {
        console.log(`Ticket ${this.id} of type "${this.type}"`);
    };

    notify = () => {
        console.log(`Notification: New Ticket ${this.id} bought online`);
    };
}

module.exports = { Ticket };
