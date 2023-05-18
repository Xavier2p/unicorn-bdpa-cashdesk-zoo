const { database } = require('../DatabaseSingleton');

class Ticket {
    constructor(type, id) {
        this.type = type;
        this.id = id;
        this.isUsed = false;
    };

    useTicket = () => {
        this.isUsed = true;
    }

    save = () => {
        database.tickets.push(this);
    }
}

module.exports = { Ticket };