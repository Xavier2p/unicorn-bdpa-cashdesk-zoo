const { PaymentFactory } = require('../payment/PaymentFactory');
const { BTCPaymentBuilder } = require('../payment/BTCPaymentBuilder');
const { CashPaymentBuilder } = require('../payment/CashPaymentBuilder');
const { CardPaymentBuilder } = require('../payment/CardPaymentBuilder');

test('get BTCPaymentBuilder', () => {
    const factory = new PaymentFactory('BTC');
    expect(factory).toBeInstanceOf(BTCPaymentBuilder);
});

test('get BTCPaymentBuilder', () => {
    const factory = new PaymentFactory('Card');
    expect(factory).toBeInstanceOf(CardPaymentBuilder);
});

test('get BTCPaymentBuilder', () => {
    const factory = new PaymentFactory('Cash');
    expect(factory).toBeInstanceOf(CashPaymentBuilder);
});

