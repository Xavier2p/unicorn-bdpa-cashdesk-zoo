class Database {
    constructor() {
        if (Database.database) {
            return Database.database;
        }
        Database.database = this;
        this.tickets = [];
        this.peopleOnSite = 0;
    }

    reset() {
        Database.database.tickets.length = 0;
    }

    checkTicket = (ticket) => {
        const found = this.tickets.find((t) => t.id === ticket);
        if (found) {
            if (found.isUsed) {
                return false;
            } else {
                found.useTicket();
                return true;
            }
        } else {
            return false;
        }
    };

    addPeopleOnSite() {
        this.peopleOnSite++;
    }

    removePeopleOnSite() {
        this.peopleOnSite--;
    }
}

const database = new Database();
module.exports = { database };
