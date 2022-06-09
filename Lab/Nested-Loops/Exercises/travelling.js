function travelling(input) {
    let index = 0;
    let command = input[index];//not in Number format because we don't know what exactly we have(string or number)
    index++;

    while (command !== "End") {
        let destination = command;
        let budget = Number(input[index]);
        index++;

        let sum = 0;

        while (sum < budget) {
            let currentMoney = Number(input[index]);
            index++;
            sum = sum + currentMoney;
        }

        console.log(`Going to ${destination}!`);
        command = input[index];
        index++;
    }
}

travelling(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"])
