function accountBalance(input) {
    let accountBalance = 0;
    let index = 0; // because we don't know how many indexes we have in input data
    let command = input[index] // not parse with Number() because we don't now that the element will be number or string
    index++; //we increase by one

    while (command !== "NoMoreMoney") {
        let money = Number(command) // because all other cases except NoMoreMoney are Number
        if (money < 0) {
            console.log("Invalid operation!");
            break;//we will finish the while loop if we find number < 0
        }
        accountBalance = accountBalance + money;
        console.log(`Increase: ${money.toFixed(2)}`)

        command = input[index]; //we go to the next value
        index++; //and increase by 1;
    }
    //this is interpolation
    console.log(`Total: ${accountBalance.toFixed(2)}`)
    //this is concatenation
    // console.log("Total: " + accountBalance.toFixed(2))


}

accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
