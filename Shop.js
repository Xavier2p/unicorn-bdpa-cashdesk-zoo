const { CommandOrder } = require('./order/CommandOrder');
const { PaymentFactory, PaymentType } = require('./payment/PaymentFactory');
const { NullReduction, Reduction } = require('./payment/Reduction');

class Shop {
    constructor(desk = true) {
        this.isDesk = desk;
        this.orderCommand = new CommandOrder();
        // this.getTickets = new GetTicke
        this.paymentDone = false;
        this.reduction = new NullReduction();
        this.paymentBuild = null;
    }

    setPaymentType = (type) => {
        if (this.orderCommand.history.length <= 0) return 'No command registered';
        if (!type) {
            console.log('Please precise paying method (BTC, Card, Cash)');
            return;
        }

        this.paymentBuild = new PaymentFactory(PaymentType[type]);
    };

    execPayment = () => {
        if (!this.paymentBuild) return 'No payment type selected';
        if (this.paymentDone) return 'Payment already done';

        const price = reduction.applyReduction(this.orderCommand.price);
        this.paymentDone = this.paymentBuild.pay(price);
    };

    getTickets = () => {
        if (this.isDesk) {
            this.getTickets().buildTickets();
        } else {
            this.getTickets().buildOnlineTickets();
        }
    };

    createReduction = (reduction) => {
        this.reduction = new Reduction(reduction);
    };
}

module.exports = { Shop };
