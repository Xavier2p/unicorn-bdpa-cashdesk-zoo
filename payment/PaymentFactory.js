class PaymentFactory {
    constructor() {
        this.price = 0;
    }

    createPayment = (paymentType, price, reduction) => {
        this.price = price;
        this.applyReduction(reduction);
        if (paymentType === "BTC") return new BTCPaymentBuilder();
        else if (paymentType === "Card") return new CardPaymentBuilder();
        else if (paymentType === "Cash") return new CashPaymentBuilder();
        else return new Error("Unknown payment type: " + paymentType);
    }

    applyReduction = (reduction) => {
        if (reduction === null) return this.price;
        this.price = reduction.applyReduction(this.price)
    }
}

module.exports = { PaymentFactory };