const { Ticket } = require('./Ticket');

class GetTickets {
    constructor(order) {
        this.order = order;
    }

    buildTickets() {
        const tickets = [];
        Object.keys(this.order).forEach((key) => {
            for (let i = 0; i < this.order[key]; i++) {
                let id = makeid(16);
                const t = new Ticket(key, id);
                tickets.push(id);
                t.save();
                t.print();
            }
        });
        return tickets;
    }

    buildOnlineTickets() {
        const tickets = [];
        Object.keys(this.order).forEach((key) => {
            for (let i = 0; i < this.order[key]; i++) {
                let id = makeid(16);
                const t = new Ticket(key, id);
                tickets.push(id);
                t.print();
                t.save();
                t.notify();
            }
        });
        return tickets;
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

module.exports = { GetTickets };
