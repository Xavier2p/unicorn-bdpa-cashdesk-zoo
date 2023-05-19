const { database } = require('./DatabaseSingleton');

class View {
    constructor() {
        if (View.view == null) {
            View.view = this;
        }
        return View.view;
    }

    info() {
        console.log("People on site: " + database.peopleOnSite);
    }
}

const view = new View();
module.exports = { View };
