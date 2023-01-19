import Transaction from "../src/transactions.js";

describe('Transaction test', () => {

    it('Checking if the setTransactionBalance sets the transactionbalance', () => {

        // Arrange
        const transaction1 = new Transaction();

        transaction1.setTransactionBalance(1000)
        // Act
        const actual = transaction1.getTransctionsBalance();

        // Assert
        expect(actual).toBe(1000);
    });


    it('Checking if the setAmount changes the amount', () => {

        // Arrange
        const transaction1 = new Transaction();

        transaction1.setAmount(900)
        // Act
        const actual = transaction1.getAmount();

        // Assert
        expect(actual).toBe(900);
    });

    it('Checking if the setTypeOfTransaction changes the type', () => {

        // Arrange
        const transaction1 = new Transaction();

        transaction1.setTypeOfTransaction("credit");
        // Act
        const actual = transaction1.getTypeOftransaction();

        // Assert
        expect(actual).toBe("credit");
    });

    it('Checking if the setDate sets it in the required format', () => {

        // Arrange
        const transaction1 = new Transaction();

        transaction1.setDate("05/ 11/ 2012");

        // Act
        const actual = transaction1.getDate();

        // Assert
        expect(actual).toBe("05/ 11/ 2012");
    });

});