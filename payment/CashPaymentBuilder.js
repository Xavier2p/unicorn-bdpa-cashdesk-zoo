class CashPaymentBuilder {
    constructor(isDesk = false) { this.isDesk = isDesk }

    pay() { return this.isDesk == true ? true : false }
}

module.exports = { CashPaymentBuilder };
