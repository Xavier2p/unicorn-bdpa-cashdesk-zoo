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
