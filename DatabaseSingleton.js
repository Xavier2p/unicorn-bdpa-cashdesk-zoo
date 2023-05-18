class Database {
    constructor() {
        if (Database.database == null) {
            this.tickets = [];
            this.peopleOnSite = 0;
            Database.database = this;
        }
        return Database.database;
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

    addPeopleOnSite = () => {
        this.peopleOnSite++;
    };

    removePeopleOnSite = () => {
        this.peopleOnSite--;
    };
}

const database = new Database();
Object.freeze(database);
// module.exports = { database: database };
