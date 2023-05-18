const { PaymentFactory, PaymentType } = require('../payment/PaymentFactory');
const { BTCPaymentBuilder } = require('../payment/BTCPaymentBuilder');
const { CashPaymentBuilder } = require('../payment/CashPaymentBuilder');
const { CardPaymentBuilder } = require('../payment/CardPaymentBuilder');

test('get BTCPaymentBuilder', () => {
    const factory = new PaymentFactory(PaymentType.BTC);
    expect(factory).toBeInstanceOf(BTCPaymentBuilder);
});

test('get CardPaymentBuilder', () => {
    const factory = new PaymentFactory(PaymentType.Card);
    expect(factory).toBeInstanceOf(CardPaymentBuilder);
});

test('get CashPaymentBuilder', () => {
    const factory = new PaymentFactory(PaymentType.Cash);
    expect(factory).toBeInstanceOf(CashPaymentBuilder);
});
