const { CommandOrder } = require('./order/CommandOrder');
const { PaymentFactory } = require('./payment/PaymentFactory');

class Shop {
    constructor(desk = true) {
        this.isDesk = desk;
        this.orderCommand = new CommandOrder();
        this.paymentFactory = new PaymentFactory();
        // this.getTickets = new GetTicke
        this.paymentDone = false;
    }

    payOrder(type) {
        if (this.orderCommand.history.length <= 0) {
            return 'No command registered';
        }
        if (!type) {
            console.log('Please precise paying method (BTC, Card, Cash)');
            return;
        }
        const res = this.paymentFactory(type, this.orderCommand.Price);
        if (res === true) {
            this.paymentDone = true;
            console.log('Success');
        } else {
            console.log(res.message);
        }
    }

    getTickets() {
        if (this.isDesk) {
            this.getTickets().buildTickets();
        } else {
            this.getTickets().buildOnlineTickets();
        }
    }
}

module.exports = { Shop };
