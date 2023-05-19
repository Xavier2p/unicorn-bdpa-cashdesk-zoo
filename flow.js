const { Zoo } = require('./Zoo');
/**
 * Example 1
 */
function ex1() {
    const zoo = new Zoo();
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

ex1();
