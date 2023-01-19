# Bank

This challenge helps you practice your OO design skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

### Requirements

* You should be able to interact with your code via the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, credit or debit amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```
```
As Bank Manager, 
I want my client to have a bank account
So that she can make deposits in her account  

As Bank Manager, 
I want my client to have a bank account
So that she can make withdrawals in her account

As Bank Manager,
I want my client to be able to print her bank statement 
So that she can see her statement of the date, her credit, her debit, and her balance as below  

```

| Objects     | Properties                          | Messages                      | Output  |
| ----------- | ----------------------------------- | ----------------------------- | ------- |
| bankAccount | balance@number=0                    | setbalance(credit,debit)      | @void   |
|             |                                     | getBalance()                  | @number |
|             | transactionlist@ARRAY[@transaction] | addTransactions(@transactins) |         |
|             |                                     | getTransactions()             | @array  |
| transaction | date                                | getDate()                     | @string |
|             | amount                              | getAmount()                   | @number |
|             | typeOfTransaction                   | getTypeOftransaction()        | @string |
|             | transactionBalance                  | getTransctionsBalance()       | @number |
| statement   |                                     | printStament(@transactions)   |         |


```

#### Standard
- [ ] Meets the spec
- [ ] Developed test-first
- [ ] Passes tests and code is linted
- [ ] Encapsulates adding and storing Transactions in a class
- [ ] Encapsulates Statement formatting in a class
- [ ] Encapsulates Transaction data in a class

#### Extended
- [ ] See a coach!
