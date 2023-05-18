class BTCPaymentBuilder {
    constructor() {
        this.address = ''
    }

    setAddress(address) {
        this.address = address;
        return this;
    }

    pay(price) {
        const okForPayment = this.address !== "";
        if (!okForPayment) {
            console.error("Missing payment details");
        } else {
            console.log(`Paying ${price}€ with BTC`);
        }
        return okForPayment;
    }
}

// module.exports = { BTCPaymentBuilder };
