class CashPaymentBuilder {
    constructor() {
        this.isOnDesk = true;
    }

    pay() {
        return this;
    }
}

module.exports = {CashPaymentBuilder}