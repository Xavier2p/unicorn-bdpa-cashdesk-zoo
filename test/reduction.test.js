const { Reduction, NullReduction } = require('../payment/Reduction');

test('Reduction is applied', () => {
    const reduction = new Reduction(10);
    expect(reduction.applyReduction(100)).toBe(90);
});

test('NullReduction is applied', () => {
    const reduction = new NullReduction();
    expect(reduction.applyReduction(100)).toBe(100);
});