class BTCPaymentBuilder {
    constructor() {
        this.address = "";
    }

    setAddress(address) {
        this.address = address;
        return this;
    }

    pay() {
        return this;
    }
}

module.exports = {BTCPaymentBuilder}