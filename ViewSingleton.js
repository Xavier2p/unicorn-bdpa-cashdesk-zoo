const { database } = require('./DatabaseSingleton');
const { Ticket } = require('./ticket/Ticket');

class View {
    constructor() {
        if (View.view == null) {
            View.view = this;
        }
        return View.view;
    }

    info() {
        console.log("People on site: " + database.peopleOnSite);
        console.log("Number tickets created: " + database.tickets.length);
        console.log("Number of tickets used: " + database.tickets.filter((ticket) => ticket.isUsed).length);
        console.log("Number of tickets not used: " + database.tickets.filter((ticket) => !ticket.isUsed).length);
    }
}

const view = new View();
module.exports = { View };
