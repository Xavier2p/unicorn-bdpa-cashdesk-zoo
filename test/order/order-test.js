const CommandOrder = require('../../order/CommandOrder');
const AdultConcreteCommand = require('../../order/AdultConcreteCommand');

test('', () => {
    const commandOrder = new CommandOrder();
    commandOrder.execute(new AdultConcreteCommand(2));
    expect(commandOrder).history.length.toBe(1);
});
