const { database } = require('./DatabaseSingleton');
const { view } = require('./ViewSingleton');
const { AdultConcreteCommand } = require('./order/AdultConcreteCommand');
const { ChildConcreteCommand } = require('./order/ChildConcreteCommand');
const { StudentConcreteCommand } = require('./order/StudentConcreteCommand');
const { Zoo } = require('./Zoo');
/**
 * Example 1
 */
function ex1() {
    const zoo = new Zoo();
    zoo.addTurnstile('enter');
    zoo.addTurnstile('exit');
    const desk = zoo.getDesk();

    // Add two adults
    desk.orderCommand.execute(new AdultConcreteCommand(2));

    // Add one child
    desk.orderCommand.execute(new ChildConcreteCommand(1));

    // Add one student
    desk.orderCommand.execute(new StudentConcreteCommand(1));

    // Undo (twice)
    desk.orderCommand.undo();
    desk.orderCommand.undo();

    // Redo (twice)
    desk.orderCommand.redo();
    desk.orderCommand.redo();

    // Set payment method (Card)
    zoo.getDesk().setPaymentType('Card');

    // Set payment detail
    desk.paymentBuild.setBeneficiary('John Doe').setId(12121212).setCcv(666).setExpiration('01/01/1970');

    // Pay
    desk.execPayment();

    // Get tickets
    let tickets = desk.getTickets();

    // Go in zoo
    zoo.getEnterTurnstiles().enter(tickets[0]);

    // Exit zoo
    zoo.getExitTurnstiles().exit();
}

/**
 * Example 2
 */
function ex2() {
    const zoo = new Zoo();
    zoo.addTurnstile('enter');
    zoo.addTurnstile('exit');
    const site = zoo.website;

    // Add two adults
    site.orderCommand.execute(new AdultConcreteCommand(2));

    // Add reduction
    site.createReduction(20);

    // Set payment method (BTC)
    site.setPaymentType('BTC');
    
    // Edge case: cannot get pay without address
    site.execPayment();

    // Set payment detail
    site.paymentBuild.setAddress('10140654');

    // Edge case: cannot get tickets before paying
    site.getTickets();

    // Edge case: cannot enter zoo without tickets
    zoo.getEnterTurnstiles().enter();

    // Pay
    site.execPayment();

    // Get tickets
    let tickets = site.getTickets();
    console.log(database);
    // Go in zoo
    zoo.getEnterTurnstiles().enter(tickets[0]);

    // Exit zoo
    zoo.getExitTurnstiles().exit();
}

//ex1();
ex2();
