class CashPaymentBuilder {
    constructor(isOnDesk = true) {
        this.isOnDesk = isOnDesk;
    }

    pay() {
        return true;
    }
}

module.exports = { CashPaymentBuilder };
