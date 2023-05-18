class BTCPaymentBuilder {
    constructor() {
        this.address = "";
    }

    setAddress(address) {
        this.address = address;
        return this;
    }

    pay() {
        return this.address !== "" ? true : new Error("Missing payment details");
    }
}

module.exports = {BTCPaymentBuilder}