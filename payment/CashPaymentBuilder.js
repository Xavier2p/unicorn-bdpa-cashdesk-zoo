class CashPaymentBuilder {
    constructor(isDesk = false) { this.isDesk = isDesk }

    pay(price) {
        if (!this.isDesk) {
            console.error("Cash payment only available at desk");
        } else {
            console.log(`Paying ${price}€ in cash`);
        }
        return this.isDesk;
    }
}

// module.exports = { CashPaymentBuilder };
