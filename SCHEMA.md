# Schemas

## Global Schema

```mermaid
classDiagram
    class Zoo{
        +turnstiles : Turnstile[]
        +desks : Shop(desk = true)[[]
        +website : Shop(website = true)
        +getTurnstile(index) Turnstile
        +getEnterTurnstile(index)
        +getExitTurnstile(index)
        +getDesk(index)
        +addTurnstile(type)
    }

    class CommandOrder{
        +execute()
        +undo()
        +redo()
        -history : CommandOrder[]
        -stack : CommandOrder[]
        -order : Order
        -price : int
        +getPrice() int
    }

    class AdultConcreteCommand{
        -price : int
        -quantity : int
        +execute()
        +undo()
        +get Price() int
    }

    class StudentConcreteCommand {
        -price : int
        -quantity : int
        +execute()
        +undo()
        +get Price() int
    }

    class ChildConcreteCommand {
        -price : int
        -quantity : int
        +execute()
        +undo()
        +get Price() int
    }

    class PaymentFactory {
        +paymentType : Enum string
        +consrtuctor(paymentType) PaymentBuilder
    }

    class CardPaymentBuilder {
        +id : int
        +ccv : int
        +expiration : string
        +beneficiary : string
        +setId(id)
        +setCcv(ccv)
        +setExpiration(expiration)
        +setBeneficiary(beneficiary)
        +pay(price)
    }

    class CashPaymentBuilder {
        +isDesk : boolean
        +pay(price)
    }

    class BitcoinPaymentBuilder {
        +address : string
        +setAddress(address)
        +pay(price)
    }

    class Ticket {
        +save()
        +print()
        +notify()
        +useTicket()
        +type : string
        +id : string
        +isUsed : boolean
    }

    class GetTickets {
        -order : Order
        +buildTickets()
        +buildOnlineTickets()
        -makeId() string
    }

    class DatabaseSingleton {
        +tickets : Ticket[]
        +peopleOnSite : int
        +reset()
        +checkTicket(ticket) boolean
        +addPeopleOnSite()
        +removePeopleOnSite()
    }

    class Shop {
        +isDesk : boolean
        +orderCommand : CommandOrder
        +reduction : NullReduction
        +paymentEngine : PaymentBuilder
        +paymentDone : boolean
        -getTickets()
        -setPaymentType()
        -execPayment()
        -createReduction()
    }

    class Turnstile {
        +isOut : boolean
        +handlers : Array
        +enter(ticket) boolean
        +exit()
        +subscribe(fn)
        +unsubscribe(fn)
    }

    class Reduction {
        +reduction : int
        +applyReduction(price) int
    }

 class ViewSingleton {
  +info()
 }

    CommandOrder <|-- AdultConcreteCommand : extends
    CommandOrder <|-- StudentConcreteCommand : extends
    CommandOrder <|-- ChildConcreteCommand : extends
    PaymentFactory <-- CardPaymentBuilder : implements
    PaymentFactory <-- CashPaymentBuilder : implements
    PaymentFactory <-- BitcoinPaymentBuilder : implements
    Shop o-- CommandOrder
    Shop o-- PaymentFactory
    Shop o-- Reduction
    Zoo o-- Shop
    Zoo o-- Turnstile
    DatabaseSingleton <.. Turnstile
    DatabaseSingleton <.. ViewSingleton
    DatabaseSingleton <.. Ticket : Observer
    Ticket <-- GetTickets
```

## Command Pattern : Order System

+ **Reasons**:
    + The users can easily add and remove options of their order thanks to `undo` and `redo` functions.
+ **Evaluation of Suitability**:
    + Changes on code will be simple.
+ **Advantages**:
    + Native `undo` and `redo` functions.
    + Simple to add a new option for developers.
    + We can add reductions directly on these options.
+ **Alternatives**: Builder Design Pattern
    + The `undo` and `redo` functions will be more complex.
    + Change the code to add options will be more complex too.

```mermaid
classDiagram
 class CommandOrder{
  +execute()
  +undo()
  +redo()
  -history : CommandOrder[]
  -stack : CommandOrder[]
  -order : Order
  -price : int
  +getPrice() int
 }

 class AdultConcreteCommand{
  -price : int
  -quantity : int
  +execute()
  +undo()
  +get Price() int
 }
 
 class StudentConcreteCommand {
  -price : int
  -quantity : int
  +execute()
  +undo()
  +get Price() int
 }
 
 class ChildConcreteCommand {
  -price : int
  -quantity : int
  +execute()
  +undo()
  +get Price() int
 }

CommandOrder <|-- AdultConcreteCommand : extends
CommandOrder <|-- StudentConcreteCommand : extends
CommandOrder <|-- ChildConcreteCommand : extends
```

## Factory & Builder Pattern : Payment System

**Factory Design Pattern**
+ **Reasons**:
    + Good way to select the right payment method
+ **Evaluation of Suitability**:
    + Easy to add a new payment method.
+ **Advantages**:
    + Create an interface for the payment methods.
+ **Alternatives**: Basic switch implementation
    + Not easily upgradable

**Builder Design Pattern**
+ **Reasons**:
    + We can create complex payment objects with many properties.
+ **Evaluation of Suitability**:
    + Simple to change payment implementation.
+ **Advantages**:
    + We must define all of the properties of the payment methods before pay.
+ **Alternatives**: Big constructor function
    + Many parameters on the constructor, this may be a problem to develop.

```mermaid
classDiagram
    class PaymentFactory {
        +paymentType : Enum string
        +consrtuctor(paymentType) PaymentBuilder
    }

    class CardPaymentBuilder {
        +id : int
        +ccv : int
        +expiration : string
        +beneficiary : string
        +setId(id)
        +setCcv(ccv)
        +setExpiration(expiration)
        +setBeneficiary(beneficiary)
        +pay(price)
    }

    class CashPaymentBuilder {
        +isDesk : boolean
        +pay(price)
    }

    class BitcoinPaymentBuilder {
        +address : string
        +setAddress(address)
        +pay(price)
    }
    
    PaymentFactory <-- CardPaymentBuilder : implements
    PaymentFactory <-- CashPaymentBuilder : implements
    PaymentFactory <-- BitcoinPaymentBuilder : implements
```

## Singleton Pattern : Database & View System

+ **Reasons**:
    + Only one instance to store the data in the application.
+ **Evaluation of Suitability**:
    + Add all methods and properties in one place.
+ **Advantages**:
    + No duplication of the data.
+ **Alternatives**: API Interface with Facade Design Pattern
    + Develepment cost will be higher.

```mermaid
classDiagram
    class DatabaseSingleton {
        +tickets : Ticket[]
        +peopleOnSite : int
        +reset()
        +checkTicket(ticket) boolean
        +addPeopleOnSite()
        +removePeopleOnSite()
    }
    class ViewSingleton {
        +info()
    }

    DatabaseSingleton <.. Turnstile : Observer
    DatabaseSingleton <.. Ticket
    DatabaseSingleton <.. ViewSingleton
```

## Observer Pattern : Turnstile System

+ **Reasons**:
    + Wait for change on turnstiles.
+ **Evaluation of Suitability**:
    + We can change the implementation of turnstile without broke the observer.
+ **Advantages**:
    + A better logic management.
+ **Alternatives**: Call a function when class is used
    + More complex implementation
    + Not really optimized

```mermaid
classDiagram
    class Turnstile {
        +isOut : boolean
        +handlers : Array
        +enter(ticket) boolean
        +exit()
        +subscribe(fn)
        +unsubscribe(fn)
    }
 
 DatabaseSingleton <.. Turnstile : Observer
```
