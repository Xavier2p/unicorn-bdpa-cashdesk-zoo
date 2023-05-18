const { Ticket } = require('../ticket/Ticket');
const { database } = require('../DatabaseSingleton');

test('Create Ticket', () => {
    const ticket = new Ticket('adult', 1);
    expect(ticket.type).toBe('adult');
    expect(ticket.id).toBe(1);
    expect(ticket.isUsed).toBe(false);
});

test('Use Ticket', () => {
    const ticket = new Ticket('adult', 1);
    ticket.useTicket();
    expect(ticket.isUsed).toBe(true);
});

test('Save Ticket', () => {
    const ticket = new Ticket('adult', 1);
    ticket.save();
    expect(database.tickets[0]).toBe(ticket);
});
