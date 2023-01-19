export default class Transaction {

    #date;
    #amount;
    #typeOfTransaction;
    #transactionBalance;

    constructor(date, typeOfTransaction, amount) {
        this.#date = date;
        this.#amount = amount;
        this.#typeOfTransaction = typeOfTransaction;
        this.#transactionBalance = 0;

    }

    getTransctionsBalance() {
        return this.#transactionBalance;
    }

    setTransactionBalance(amount) {
        this.#transactionBalance = amount;
    }

    setDate(date) {
        this.#date = date;
    }

    getDate() {
        return this.#date;
    }

    setAmount(amount) {
        this.#amount = amount;
    }

    getAmount() {
        return this.#amount;
    }

    setTypeOfTransaction(type) {
        this.#typeOfTransaction = type;
    }

    getTypeOftransaction() {
        return this.#typeOfTransaction;
    }
}