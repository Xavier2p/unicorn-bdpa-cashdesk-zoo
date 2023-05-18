class BTCPaymentBuilder {
    constructor() {
        this.address = '';
    }

    setAddress(address) {
        this.address = address;
        return this;
    }

    pay() {
        return true;
    }
}

module.exports = { BTCPaymentBuilder };
