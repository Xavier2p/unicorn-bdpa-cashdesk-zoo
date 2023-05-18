const { Ticket } = require('./ticket/Ticket');
const { Turnstile } = require('./turnstile/Turnstile');

const turnstile = new Turnstile();

const ticketOne = new Ticket('adult', 1);
const ticketTwo = new Ticket('child', 2);

ticketOne.save();
ticketTwo.save();

console.log(turnstile.checkTicket(ticketOne.id));
console.log(turnstile.checkTicket(123));

console.log(turnstile);