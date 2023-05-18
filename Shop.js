// const { CommandOrder } = require('./order/CommandOrder');
// const { PaymentFactory } = require('./payment/PaymentFactory');
// const { NullReduction, Reduction } = require('./payment/Reduction');

class Shop {
    constructor(desk = true) {
        this.isDesk = desk;
        this.orderCommand = new CommandOrder();
        this.paymentFactory = new PaymentFactory();
        // this.getTickets = new GetTicke
        this.paymentDone = false;
        this.reduction = new NullReduction();
    }

    payOrder = (type) => {
        if (this.orderCommand.history.length <= 0) return 'No command registered';
        if (!type) {
            console.log('Please precise paying method (BTC, Card, Cash)');
            return;
        }
        const res = this.paymentFactory(type, this.orderCommand.Price, this.reduction);

        if (res === true) {
            this.paymentDone = true;
            console.log('Success');
        } else console.log(res.message);
    }

    getTickets = () => {
        if (this.isDesk) {
            this.getTickets().buildTickets();
        } else {
            this.getTickets().buildOnlineTickets();
        }
    }

    createReduction = (reduction) => { this.reduction = new Reduction(reduction) }
}

// module.exports = { Shop };
