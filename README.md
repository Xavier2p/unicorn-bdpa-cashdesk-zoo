# BDPA

## Zoo cash desk

Within the zoo, design a cash register information system that allows the zoo to:

- sell tickets on a cash register (on-site)
- sell tickets online.

Cash register information system also supports:

- tariffs for various groups of customers (children, adults, students, ... )
- integration with turnstiles
- various reporting views

> ### Apply at least 5 different design patterns
>
> Apply at least 5 different design patterns when designing a zoo cash register system. At least three must be applied to address business requirements. The others can be applied to address the technical parts.

### Outputs

- High level design of the system
- Detailed design of particular parts of the system in which the chosen design patterns were applied
- Brief introduction of the applied patterns
- Explanation of the pattern usage
  - what the design pattern was used for
  - reasons of usage
  - evaluation of suitability
  - advantages
  - possible alternatives

## Global Schema

Fot more details, please go to [schema.md](https://github.com/iot-unicorn/cash-desk-zoo/blob/main/SCHEMA.md).

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
