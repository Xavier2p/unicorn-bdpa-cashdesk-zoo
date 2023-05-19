const { database } = require('../DatabaseSingleton');

class Turnstile {
    constructor(isOut = false) {
        this.isOut = isOut;
        this.handlers = [];
    }

    enter = (ticket) => {
        if (database.checkTicket(ticket)) {
            this.handlers.forEach((item) => {
                item.call('enter');
            });
            return true;
        }
        console.error("You need tickets to enter the zoo");
        return false;
    };

    exit() {
        this.handlers.forEach((item) => {
            item.call('exit');
        });
    }

    subscribe(fn) {
        this.handlers.push(fn);
    }

    unsubscribe(fn) {
        this.handlers = this.handlers.filter((item) => {
            if (item !== fn) {
                return item;
            }
        });
    }
}

module.exports = { Turnstile };
