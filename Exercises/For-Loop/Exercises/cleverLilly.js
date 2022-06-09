function cleverLilly(input) {
    let lillyAge = Number(input[0]);
    let laundryPrice = Number(input[1]);
    let singleToyPrice = Number(input[2]);
    let toysCounter = 0;
    let stolenMoney = 0;
    let savedMoney = 0;

    let addedMoney = 10;

    for (let i = 1; i <= lillyAge; i++) { //from the first year of Lilly to last year(our input data)
        if (i % 2 === 0) {
            stolenMoney++;//add 1 lv on every iteration

            //like this on every even number we add 10 lv. Total even numbers are 5, savedMoney will be 50.
            // savedMoney += 10;

            //we want on every even number to add 10 lv to the previous savedMoney
            savedMoney += addedMoney;//first iteration savedMoney will be 10 leva
            addedMoney += 10;//add 10 leva to every iteration. First iteration will be 10, second will be 20, third will be 30
        } else {
            toysCounter++;
        }
    }


    let totalMoneyFromToys = singleToyPrice * toysCounter;

    let totalSavedMoney = (totalMoneyFromToys + savedMoney) - stolenMoney;

    if(totalSavedMoney >=laundryPrice){
        console.log(`Yes! ${(totalSavedMoney - laundryPrice).toFixed(2)}`);
    }else{
        console.log(`No! ${(laundryPrice-totalSavedMoney).toFixed(2)}`)
    }

}

cleverLilly(["10", "170.00", "6"]);