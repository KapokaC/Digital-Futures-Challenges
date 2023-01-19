export default class BankAccount {

    #balance;
    #transactions;

    constructor(balance = 0) {
        this.#balance = balance;
        this.#transactions = [];
    }

    getBalance() {
        return this.#balance;
    }

    getTransactions() {
        return this.#transactions;
    }

    setBalance(amount, type) {
        if (type === 'credit') {
            this.#balance += amount;
        }
        if (type === 'debit') {
            this.#balance -= amount;
        }
    }

    addTransactions(transaction) {

        this.setBalance(transaction.getAmount(), transaction.getTypeOftransaction());

        transaction.setTransactionBalance(this.getBalance());

        this.#transactions.push(transaction);
    }
}