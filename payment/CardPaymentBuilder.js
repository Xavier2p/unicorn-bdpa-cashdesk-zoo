class CardPaymentBuilder {
    constructor() {
        this.id = 0;
        this.ccv = 0;
        this.expiration = "";
        this.beneficiary = "";
    }

    setId(id) {
        this.id = id;
        return this;
    }

    setCcv(ccv) {
        this.ccv = ccv;
        return this;
    }

    setCcv(expiration) {
        this.expiration = expiration;
        return this;
    }

    setCcv(beneficiary) {
        this.beneficiary = beneficiary;
        return this;
    }

    pay() {
        return this;
    }
}