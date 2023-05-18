<<<<<<< HEAD
// const { CommandOrder } = require('./order/CommandOrder');
// const { PaymentFactory } = require('./payment/PaymentFactory');
// const { NullReduction, Reduction } = require('./payment/Reduction');
=======
const { CommandOrder } = require('./order/CommandOrder');
const { PaymentFactory, PaymentType } = require('./payment/PaymentFactory');
const { NullReduction, Reduction } = require('./payment/Reduction');
>>>>>>> 23714a6cb3829c4d726aa19578cd5c59fbee8ad1

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
            return 'Please precise paying method (BTC, Card, Cash)';
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
        if (this.paymentDone) {
            if (this.isDesk) {
                this.getTickets(this.orderCommand.order).buildTickets();
            } else {
                this.getTickets(this.orderCommand.order).buildOnlineTickets();
            }
            this.CommandOrder = new CommandOrder();
            this.reduction = new NullReduction();
        } else {
            console.log('Payment not done');
        }
    };

    createReduction = (reduction) => {
        this.reduction = new Reduction(reduction);
    };
}

// module.exports = { Shop };
