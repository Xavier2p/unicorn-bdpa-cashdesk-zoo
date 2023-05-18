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

    getOpen
}

const zoo = new Zoo();
