const { database } = require('../DatabaseSingleton');

class Turnstile {
    constructor() {
        this.id = 0;
        this.isOut = false;
    };

    checkTicket = (ticket) => {
        return database.checkTicket(ticket);
    };
};

module.exports = { Turnstile };