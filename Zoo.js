const { Shop } = require('./Shop');

class Zoo {
    constructor() {
        this.turnstiles = [];
        this.desks = [new Shop()];
        this.website = new Shop(false);
    }

    getTurnstiles(index) {
        return this.turnstiles[index];
    }

    getEnterTurnstiles(index) {
        if (!index) index = 0;
        return this.turnstiles.find((turnstile) => !turnstile.isOut);
    }

    getExitTurnstiles(index) {
        if (!index) index = 0;
        return this.turnstiles.find((turnstile) => turnstile.isOut);
    }

    getDesk(index) {
        if (!index) index = 0;
        return this.desks[index];
    }
}

const zoo = new Zoo();
