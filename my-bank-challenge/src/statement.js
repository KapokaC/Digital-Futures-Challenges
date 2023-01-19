export default class Statement {

    printStatements(transactions) {

        console.log("date         ||" + "  credit  ||" + "  debit  ||" + " balance");

        for (let i = transactions.length - 1; i >= 0; i--) {

            if (transactions[i].getTypeOftransaction() === "credit") {
                console.log(transactions[i].getDate() + "   || " + transactions[i].getAmount().toFixed(2) + "  ||         || " + transactions[i].getTransctionsBalance().toFixed(2));
            }
            if (transactions[i].getTypeOftransaction() === "debit") {
                console.log(transactions[i].getDate() + "   ||          ||  " + transactions[i].getAmount().toFixed(2) + " || " + transactions[i].getTransctionsBalance().toFixed(2));

            }

        }
    }

}



