# do command
Add two adult
* ````
Add one child
Add one student

- `zoo.getDesk().orderCommand.execute(new StudentConcreteCommand(1))`

Undo (twice)

- `zoo.getDesk().orderCommand.undo()`

Redo (twice)

- `zoo.getDesk().orderCommand.redo()`

Set payment method (Card)

- `zoo.getDesk().setPaymentType("Card")`

Set payment detail

- `zoo.getDesk().paymentBuild.setBeneficiary("John Doe").setId(12121212).setCcv(666).setExpiration("01/01/1970")`

Pay

- `zoo.getDesk().execPayment()`

Get tickets

- `zoo.getDesk().getTickets()`

Go in zoo

- `zoo.getEnterTurnstiles().enter("previous Id")`

Exit zoo

- `zoo.getExitTurnstiles().exit()`

## Second example

Add two adults

- `zoo.website.orderCommand.execute(new AdultConcreteCommand(2))`

Add reduction

- `zoo.website.createReduction(20)`

Set payment method (BTC)

- `zoo.website.setPaymentType("BTC")`

Set payment detail

- `zoo.website.paymentBuild.setAddress("10140654")`

Edge case: cannot get tickets before paying

- `zoo.website.getTickets()`

Pay

- `zoo.website.execPayment()`

Get tickets

- `zoo.website.getTickets()`

Go in zoo

- `zoo.getEnterTurnstiles().enter("previous Id")`

Exit zoo

- `zoo.getExitTurnstiles().exit()`
