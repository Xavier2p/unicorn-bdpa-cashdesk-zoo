class Database {
    constructor() {
        if (Database.instance == null) {
            this.tickets = [];
            this.peopleOnSite = 0;
            Database.instance = this;
        }
        return Database.instance;
    };

    checkTicket = (ticket) => {
        const found = this.tickets.find((t) => t.id === ticket);
        if (found) {
            if (found.isUsed) {
                console.log('Ticket already used');
                return false;
            } else {
                found.useTicket();
                return true;
            }
        } else {
            console.log('Ticket not found');
            return false;
        }
    };
}

const instance = new Database();
Object.freeze(instance);
module.exports = { database: instance };