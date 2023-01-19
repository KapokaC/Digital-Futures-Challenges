import BankAccount from "../src/bankAccount.js";

describe('Bank Account tests', () => {

    it('should instantiate with balance as 0', () => {

        // Arrange
        const testBankAccount = new BankAccount();

        // Act
        const actual = testBankAccount.getBalance();

        // Assert
        expect(actual).toEqual(0);
    });

    it('should return any empty array when getTransaction is called', () => {

        //Arrange
        const testBankAccount = new BankAccount();

        //Act
        const actual = testBankAccount.getTransactions();

        //Assert 
        expect(actual).toHaveSize(0);
    });


    it('create a trasaction and check if the getTransaction size to increase by 1', () => {

        //Arrange
        const testBankAccount = new BankAccount();

        const transaction1 = {
            date: "10/01/2012",
            amount: 1000,
            typeOfTransaction: "credit",
            setTransactionBalance: () => { },
            getAmount: () => { },
            getTypeOftransaction: () => { }
        };

        //Act
        testBankAccount.addTransactions(transaction1);
        const actual = testBankAccount.getTransactions();

        //Assert
        expect(actual).toHaveSize(1);
    });

    it('check the balance after a transaction has been added', () => {

        //Arrange
        const testBankAccount = new BankAccount();
        const transaction1 = {
            date: "10/01/2012",
            amount: 1000,
            typeOfTransaction: "credit",
            setTransactionBalance: () => { },
            getAmount: () => { return 1000 },
            getTypeOftransaction: () => { return "credit" }
        };

        //Act
        testBankAccount.addTransactions(transaction1);
        const actual = testBankAccount.getBalance();

        //Assert
        expect(actual).toEqual(1000);
    });

    it('check if the balance has reduced after testBankAccount has been debited ', () => {

        //Arrange
        const testBankAccount = new BankAccount();
        testBankAccount.setBalance(1000, "credit");

        //Act
        testBankAccount.setBalance(500, "debit");
        const actual = testBankAccount.getBalance();

        //Assert
        expect(actual).toEqual(500);
    });

    it('check if the balance has increased after testBankAccount has been credited ', () => {

        //Arrange
        const testBankAccount = new BankAccount();

        //Act
        testBankAccount.setBalance(2000, "credit");
        const actual = testBankAccount.getBalance();

        //Assert
        expect(actual).toEqual(2000);
    });

});

