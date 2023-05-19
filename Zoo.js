const { database } = require('./DatabaseSingleton');
const { view, View } = require('./ViewSingleton');
const { Shop } = require('./Shop');
const { Turnstile } = require('./turnstile/Turnstile');

class Zoo {
    constructor() {
        this.turnstiles = [];
        this.desks = [new Shop()];
        this.website = new Shop(false);
        this.view = new View();
    }

    getTurnstiles = (index) => this.turnstiles[index];

    getEnterTurnstiles(index) {
        if (!index) index = 0;
        return this.turnstiles.filter((turnstile) => !turnstile.isOut)[index];
    }

    getExitTurnstiles(index) {
        if (!index) index = 0;
        return this.turnstiles.filter((turnstile) => turnstile.isOut)[index];
    }

    getDesk(index) {
        if (!index) index = 0;
        return this.desks[index];
    }

    addTurnstile = (type) => {
        if (type === 'enter') {
            const t = new Turnstile(false);
            t.subscribe(() => {
                database.addPeopleOnSite();
            });
            this.turnstiles.push(t);
        } else if (type === 'exit') {
            const t = new Turnstile(true);
            t.subscribe(() => {
                database.removePeopleOnSite();
            });
            this.turnstiles.push(t);
        }
    };
}

module.exports = { Zoo };
