function vacation(input) {
    let neededMoney = Number(input[0]);//2000
    let budget = Number(input[1]);//1000
    let totalDays = 0;
    let spendDays = 0;

    let index = 2;
    let command = input[index];//index 2 (that we can find Spend or Save)

    while (budget < neededMoney) {

        totalDays++//to increase by 1 on every loop
        index++;//3

        if (command === "spend") { //index 2
            spendDays++;

            if(spendDays===5){
                console.log("You can't save the money.")
                console.log(totalDays);
                break;
            }
            let moneyToSpend = Number(input[index]) //index 3

            budget -= moneyToSpend;
            if (budget < 0) { //if budget gets negative number, always display 0
                budget = 0;
            }
        } else if (command === "save") {
            spendDays=0;
            let moneyToSave = Number(input[index]);
            budget+=moneyToSave;

        }
        // console.log(command)//spend,save
        index++;
        command = input[index];

    }
    if(budget >= neededMoney){
        console.log(`You saved the money for ${totalDays} days.`);
    }


}

vacation(["2000", "1000", "spend", "1200", "save", "2000"])
