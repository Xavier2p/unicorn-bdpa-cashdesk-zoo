const { Turnstile } = require('../turnstile/Turnstile');
const { Ticket } = require('../ticket/Ticket');

test('Create Turnstile', () => {
    const turnstile = new Turnstile();
    expect(turnstile.isOut).toBe(false);
    expect(turnstile.enter(1)).toBe(false);
    expect(turnstile.enter(123)).toBe(false);
});

test('Check Ticket', () => {
    const turnstile = new Turnstile();
    const ticketOne = new Ticket('adult', 1);
    const ticketTwo = new Ticket('child', 2);
    ticketOne.save();
    ticketTwo.save();
    expect(turnstile.enter(ticketOne.id)).toBe(true);
    expect(turnstile.enter(ticketTwo.id)).toBe(true);
    expect(turnstile.enter(123)).toBe(false);
});

test('enter turnstile', () => {
    let count = 0;
    const observer = () => {
        count++;
    };
    const turnstile = new Turnstile(false);
    turnstile.subscribe(observer);
    turnstile.enter();
    expect(count).toBe(1);
});
