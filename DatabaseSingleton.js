class Database {
    constructor() {
        if (Database.instance == null) {
            this.tickets = [];
            this.peopleOnSite = 0;
            Database.instance = this;
        }
        return Database.instance;
    }

    reset() {
        Database.instance.tickets.length = 0;
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

const instance = new Database();
Object.freeze(instance);
// module.exports = { database: instance };
