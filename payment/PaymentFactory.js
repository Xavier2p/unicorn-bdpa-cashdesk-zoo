class PaymentFactory {
    constructor(paymentType) {
        if (paymentType === "BTC") return new BTCPaymentBuilder();
        else if (paymentType === "Card") return new CardPaymentBuilder();
        else if (paymentType === "Cash") return new CashPaymentBuilder();
        else return new Error("Unknown payment type: " + paymentType);
    }
}

module.exports = { PaymentFactory };