const { CommandOrder } = require('../order/CommandOrder');
const { AdultConcreteCommand } = require('../order/AdultConcreteCommand');
const { StudentConcreteCommand } = require('../order/StudentConcreteCommand');
const { ChildConcreteCommand } = require('../order/ChildConcreteCommand');

test('adultOrder', () => {
    const commandOrder = new CommandOrder();
    const adultCommand = new AdultConcreteCommand(2);
    commandOrder.execute(adultCommand);
    expect(commandOrder.history.length).toBe(1);
    expect(commandOrder.Price).toBe(adultCommand.Price);
    expect(JSON.stringify(commandOrder.order)).toBe(JSON.stringify({ adult: 2 }));
    commandOrder.undo();
    expect(commandOrder.history.length).toBe(0);
    expect(commandOrder.Price).toBe(0);
    expect(JSON.stringify(commandOrder.order)).toBe(JSON.stringify({ adult: 0 }));
});

test('childOrder', () => {
    const commandOrder = new CommandOrder();
    const childCommand = new ChildConcreteCommand(2);
    commandOrder.execute(childCommand);
    expect(commandOrder.history.length).toBe(1);
    expect(commandOrder.Price).toBe(childCommand.Price);
    expect(JSON.stringify(commandOrder.order)).toBe(JSON.stringify({ child: 2 }));
    commandOrder.undo();
    expect(commandOrder.history.length).toBe(0);
    expect(commandOrder.Price).toBe(0);
    expect(JSON.stringify(commandOrder.order)).toBe(JSON.stringify({ child: 0 }));
});

test('studentOrder', () => {
    const commandOrder = new CommandOrder();
    const studentCommand = new StudentConcreteCommand(2);
    commandOrder.execute(studentCommand);
    expect(commandOrder.history.length).toBe(1);
    expect(commandOrder.Price).toBe(studentCommand.Price);
    expect(JSON.stringify(commandOrder.order)).toBe(JSON.stringify({ student: 2 }));
    commandOrder.undo();
    expect(commandOrder.history.length).toBe(0);
    expect(commandOrder.Price).toBe(0);
    expect(JSON.stringify(commandOrder.order)).toBe(JSON.stringify({ student: 0 }));
});

test('history', () => {
    const commandOrder = new CommandOrder();
    const s = new StudentConcreteCommand(1);
    const a = new AdultConcreteCommand(2);
    const c = new ChildConcreteCommand(3);
    commandOrder.execute(s);
    commandOrder.execute(a);
    commandOrder.execute(c);
    expect(commandOrder.history.length).toBe(3);
    expect(commandOrder.Price).toBe(s.Price + a.Price + c.Price);
    expect(JSON.stringify(commandOrder.order)).toBe(JSON.stringify({ student: 1, adult: 2, child: 3 }));
    commandOrder.undo();
    expect(commandOrder.history.length).toBe(2);
    expect(commandOrder.Price).toBe(s.Price + a.Price);
    expect(commandOrder.order.student).toBe(1);
    expect(commandOrder.order.adult).toBe(2);
    expect(commandOrder.order.child).toBe(0);
    commandOrder.undo();
    expect(commandOrder.history.length).toBe(1);
    expect(commandOrder.Price).toBe(s.Price);
    expect(commandOrder.order.student).toBe(1);
    expect(commandOrder.order.adult).toBe(0);
    expect(commandOrder.order.child).toBe(0);
    commandOrder.undo();
    commandOrder.undo();
});

test('redo', () => {
    const commandOrder = new CommandOrder();
    const s = new StudentConcreteCommand(1);
    const a = new AdultConcreteCommand(2);
    const c = new ChildConcreteCommand(3);
    commandOrder.execute(s);
    commandOrder.execute(a);
    commandOrder.execute(c);
    commandOrder.undo();
    commandOrder.undo();
    commandOrder.redo();
    expect(commandOrder.history.length).toBe(2);
    expect(commandOrder.Price).toBe(s.Price + a.Price);
    expect(commandOrder.order.student).toBe(1);
    expect(commandOrder.order.adult).toBe(2);
    expect(commandOrder.order.child).toBe(0);
    commandOrder.redo();
    expect(commandOrder.history.length).toBe(3);
    expect(commandOrder.Price).toBe(s.Price + a.Price + c.Price);
    expect(commandOrder.order.student).toBe(1);
    expect(commandOrder.order.adult).toBe(2);
    expect(commandOrder.order.child).toBe(3);
    commandOrder.redo();
    commandOrder.redo();
});
