// const { BTCPaymentBuilder } = require('./BTCPaymentBuilder');
// const { CardPaymentBuilder } = require('./CardPaymentBuilder');
// const { CashPaymentBuilder } = require('./CashPaymentBuilder');

const PaymentType = {
    BTC: 'BTC',
    Card: 'Card',
    Cash: 'Cash',
};

class PaymentFactory {
    constructor(paymentType) {
        if (paymentType === PaymentType.BTC) return new BTCPaymentBuilder();
        else if (paymentType === PaymentType.Card) return new CardPaymentBuilder();
        else if (paymentType === PaymentType.Cash) return new CashPaymentBuilder();
        else return new Error('Unknown payment type: ' + paymentType);
    }
}

// module.exports = { PaymentFactory };
