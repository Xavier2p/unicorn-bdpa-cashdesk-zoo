class CardPaymentBuilder {
    constructor() {
        this.id = 0;
        this.ccv = 0;
        this.expiration = '';
        this.beneficiary = '';
    }

    setId = (id) => {
        this.id = id;
        return this;
    }

    setCcv = (ccv) => {
        this.ccv = ccv;
        return this;
    }

    setExpiration = (expiration) => {
        this.expiration = expiration;
        return this;
    }

    setBeneficiary = (beneficiary) => {
        this.beneficiary = beneficiary;
        return this;
    }

    pay = (price) => {
        const okForPayment = this.id !== 0 && this.ccv !== 0 && this.expiration !== "" && this.beneficiary !== "";
        if (!okForPayment) {
            console.error("Missing payment details");
        } else {
            console.log(`Paying ${price}€ with card `);
        }
        return okForPayment;
    }
}

// module.exports = { CardPaymentBuilder };
