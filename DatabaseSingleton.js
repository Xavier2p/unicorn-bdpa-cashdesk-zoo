class Database {
    constructor() {
        if (Database.instance == null) {
            this.tickets = [];
            this.peopleOnSite = 0;
            Database.instance = this;
        }
        return Database.instance;
    };
}

const instance = new Database();
Object.freeze(instance);
export default instance;