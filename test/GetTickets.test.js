const { database } = require('../DatabaseSingleton');
const { AdultConcreteCommand } = require('../order/AdultConcreteCommand');
const { CommandOrder } = require('../order/CommandOrder');
const { StudentConcreteCommand } = require('../order/StudentConcreteCommand');
const { GetTickets } = require('../ticket/GetTickets');

beforeEach(() => {
    database.reset();
});

test('registered ticket of same type', () => {
    const command = new CommandOrder();
    command.execute(new AdultConcreteCommand(2));
    const getTickets = new GetTickets(command.order);
    getTickets.buildTickets();
    expect(database.tickets.length).toBe(2);
    database.tickets.forEach((ticket) => {
        expect(ticket.type).toBe('adult');
    });
});

test('registered ticket of different type', () => {
    const command = new CommandOrder();
    command.execute(new AdultConcreteCommand(2));
    command.execute(new StudentConcreteCommand(1));
    const getTickets = new GetTickets(command.order);
    getTickets.buildTickets();
    expect(database.tickets.length).toBe(3);
    expect(database.tickets.filter((ticket) => ticket.type === 'student').length).toBe(1);
    expect(database.tickets.filter((ticket) => ticket.type === 'adult').length).toBe(2);
});
