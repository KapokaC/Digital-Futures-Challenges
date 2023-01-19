import Statement from "../src/statement.js";

describe('Statement test', () => {

    it('should check if printstatement is being called', () => {

        const transaction1 = {
            date: "10/01/2012",
            amount: 1000,
            typeOfTransaction: "credit",
            getDate: () => { },
            getAmount: () => { return 1000 },
            getTypeOftransaction: () => { return "credit" },
            getTransctionsBalance: () => { return 1000 }
        };

        const transaction2 = {
            date: "13/01/2012",
            amount: 2000,
            typeOfTransaction: "credit",
            getDate: () => { },
            getAmount: () => { return 2000 },
            getTypeOftransaction: () => { return "credit" },
            getTransctionsBalance: () => { return 3000 }
        };

        const transaction3 = {
            date: "14/01/2012",
            amount: 500,
            typeOfTransaction: "debit",
            getDate: () => { },
            getAmount: () => { return 500 },
            getTypeOftransaction: () => { return "debit" },
            getTransctionsBalance: () => { return 2500 }
        };

        // Arrange
        const statement = new Statement();
        const statementSpy = spyOn(console, 'log');
        const transactions = [transaction1, transaction2, transaction3]

        // Act
        statement.printStatements(transactions);

        // Assert 
        expect(statementSpy).toHaveBeenCalledTimes(4);

    });


});



