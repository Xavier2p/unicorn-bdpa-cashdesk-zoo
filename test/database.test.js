const { database } = require('../DatabaseSingleton');
const { Ticket } = require('../ticket/Ticket');

test('Init Database', () => {
    expect(database.tickets).toEqual([]);
    expect(database.peopleOnSite).toBe(0);
});

test('Recreate Database', () => {
    const databaseTwo = new database.constructor();
    expect(databaseTwo).toBe(database);
});

test('Check Ticket', () => {
    const ticketOne = new Ticket('adult', 1);
    const ticketTwo = new Ticket('child', 2);
    ticketOne.save();
    ticketTwo.save();
    expect(database.checkTicket(1)).toBe(true);
    expect(database.checkTicket(2)).toBe(true);
    expect(database.checkTicket(123)).toBe(false);
});