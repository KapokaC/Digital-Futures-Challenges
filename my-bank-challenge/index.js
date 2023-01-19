import BankAccount from "./src/bankAccount.js";
import Transaction from "./src/transactions.js";
import Statement from "./src/statement.js";

const bankAccount = new BankAccount();

const transaction1 = new Transaction("10/01/2012", "credit", 1000.00);
const transaction2 = new Transaction("13/01/2012", "credit", 2000.00);
const transaction3 = new Transaction("14/01/2012", "debit", 500.00);

bankAccount.addTransactions(transaction1);
bankAccount.addTransactions(transaction2);
bankAccount.addTransactions(transaction3);

const statement = new Statement()

statement.printStatements(bankAccount.getTransactions());


