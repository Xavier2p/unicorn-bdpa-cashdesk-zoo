// const { Ticket } = require('./Ticket');

class GetTickets {
    constructor(order) {
        this.order = order;
    }

    buildTickets() {
        Object.keys(this.order).forEach((key) => {
            for (let i = 0; i < this.order[key]; i++) {
                const t = new Ticket(key, makeid(16));
                t.save();
                t.print();
            }
        });
    }

    buildOnlineTickets() {
        Object.keys(this.order).forEach((key) => {
            for (let i = 0; i < this.order[key]; i++) {
                const t = new Ticket(key, makeid(16));
                t.save();
                t.print();
                t.notify();
            }
        });
    }
}

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// module.exports = { GetTickets };
