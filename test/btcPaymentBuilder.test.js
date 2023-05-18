const { BTCPaymentBuilder } = require('../payment/BTCPaymentBuilder');

test('Create', () => {
    const btcPaymentBuilder = new BTCPaymentBuilder();
    expect(btcPaymentBuilder.address).toBe('');
});

test('Set address', () => {
    const btcPaymentBuilder = new BTCPaymentBuilder();
    btcPaymentBuilder.setAddress('1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2');
    expect(btcPaymentBuilder.address).toBe('1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2');
});

test('Pay with Address', () => {
    const btcPaymentBuilder = new BTCPaymentBuilder();
    btcPaymentBuilder.setAddress('1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2');
    expect(btcPaymentBuilder.pay(10)).toBe(true);
});

test('Pay without Address', () => {
    const btcPaymentBuilder = new BTCPaymentBuilder();
    expect(btcPaymentBuilder.pay(10)).toBe(false);
});