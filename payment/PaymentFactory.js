class PaymentFactory {
    constructor(price) { this.price = price; }

    createPayment = (paymentType) => {
        if (paymentType === "BTC") return new BTCPaymentBuilder();
        else if (paymentType === "Card") return new CardPaymentBuilder();
        else if (paymentType === "Cash") return new CashPaymentBuilder();
        else return new Error("Unknown payment type: " + paymentType);
    }

    applyReduction = (reduction) => { this.price = reduction.applyReduction(this.price) }
}

module.exports = { PaymentFactory };