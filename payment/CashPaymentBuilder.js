class CashPaymentBuilder {
    constructor(isOnDesk=true) {
        this.isOnDesk = isOnDesk;
    }

    pay() {
        return this;
    }
}

module.exports = {CashPaymentBuilder}