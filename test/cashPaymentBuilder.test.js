const { CashPaymentBuilder } = require('../payment/CashPaymentBuilder');

test('Create', () => {
    const cashPaymentBuilder = new CashPaymentBuilder();
    expect(cashPaymentBuilder.isDesk).toBe(false);
});

test('Create with desk', () => {
    const cashPaymentBuilder = new CashPaymentBuilder(true);
    expect(cashPaymentBuilder.isDesk).toBe(true);
});

test('Pay with desk', () => {
    const cashPaymentBuilder = new CashPaymentBuilder(true);
    expect(cashPaymentBuilder.pay(10)).toBe(true);
});

test('Pay without desk', () => {
    const cashPaymentBuilder = new CashPaymentBuilder();
    expect(cashPaymentBuilder.pay(10)).toBe(false);
});
