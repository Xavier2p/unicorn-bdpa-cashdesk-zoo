const { CardPaymentBuilder } = require('../payment/CardPaymentBuilder');

test('Create', () => {
    const cardPaymentBuilder = new CardPaymentBuilder();
    expect(cardPaymentBuilder.id).toBe(0);
    expect(cardPaymentBuilder.ccv).toBe(0);
    expect(cardPaymentBuilder.expiration).toBe('');
    expect(cardPaymentBuilder.beneficiary).toBe('');
});

test('Set id', () => {
    const cardPaymentBuilder = new CardPaymentBuilder();
    cardPaymentBuilder.setId(123456789);
    expect(cardPaymentBuilder.id).toBe(123456789);
});

test('Set ccv', () => {
    const cardPaymentBuilder = new CardPaymentBuilder();
    cardPaymentBuilder.setCcv(123);
    expect(cardPaymentBuilder.ccv).toBe(123);
});

test('Set expiration', () => {
    const cardPaymentBuilder = new CardPaymentBuilder();
    cardPaymentBuilder.setExpiration('12/24');
    expect(cardPaymentBuilder.expiration).toBe('12/24');
});

test('Set beneficiary', () => {
    const cardPaymentBuilder = new CardPaymentBuilder();
    cardPaymentBuilder.setBeneficiary('John Doe');
    expect(cardPaymentBuilder.beneficiary).toBe('John Doe');
});

test('Pay with all details', () => {
    const cardPaymentBuilder = new CardPaymentBuilder();
    cardPaymentBuilder.setId(123456789);
    cardPaymentBuilder.setCcv(123);
    cardPaymentBuilder.setExpiration('12/24');
    cardPaymentBuilder.setBeneficiary('John Doe');
    expect(cardPaymentBuilder.pay(10)).toBe(true);
});


test('Pay without id', () => {
    const cardPaymentBuilder = new CardPaymentBuilder();
    cardPaymentBuilder.setCcv(123);
    cardPaymentBuilder.setExpiration('12/24');
    cardPaymentBuilder.setBeneficiary('John Doe');
    expect(cardPaymentBuilder.pay(10)).toBe(false);
});

test('Pay without ccv', () => {
    const cardPaymentBuilder = new CardPaymentBuilder();
    cardPaymentBuilder.setId(123456789);
    cardPaymentBuilder.setExpiration('12/24');
    cardPaymentBuilder.setBeneficiary('John Doe');
    expect(cardPaymentBuilder.pay(10)).toBe(false);
});

test('Pay without expiration', () => {
    const cardPaymentBuilder = new CardPaymentBuilder();
    cardPaymentBuilder.setId(123456789);
    cardPaymentBuilder.setCcv(123);
    cardPaymentBuilder.setBeneficiary('John Doe');
    expect(cardPaymentBuilder.pay(10)).toBe(false);
});

test('Pay without beneficiary', () => {
    const cardPaymentBuilder = new CardPaymentBuilder();
    cardPaymentBuilder.setId(123456789);
    cardPaymentBuilder.setCcv(123);
    cardPaymentBuilder.setExpiration('12/24');
    expect(cardPaymentBuilder.pay(10)).toBe(false);
});

test('Pay without details', () => {
    const cardPaymentBuilder = new CardPaymentBuilder();
    expect(cardPaymentBuilder.pay(10)).toBe(false);
});
