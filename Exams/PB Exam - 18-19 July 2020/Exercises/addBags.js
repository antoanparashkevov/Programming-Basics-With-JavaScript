function addBags(input) {
    let bagPriceOver20 = Number(input[0]).toFixed(2);
    let currentBagKg = Number(input[1]);
    let remainingDays = Number(input[2]);
    let bagCounts = Number(input[3]);

    let currentPriceBag = 0;

    if (currentBagKg < 10) {
        currentPriceBag = bagPriceOver20 * 0.2;
    } else if (currentBagKg >= 10 && currentBagKg <= 20) {
        currentPriceBag = bagPriceOver20 * 0.5;
    }else if(currentBagKg >20){
        currentPriceBag = bagPriceOver20;
    }

    if (remainingDays > 30) {
        currentPriceBag *= 1.10;
    } else if (remainingDays >= 7 && remainingDays <= 30) {
        currentPriceBag *= 1.15;
    } else if (remainingDays < 7) {
        currentPriceBag *= 1.40;
    }

    currentPriceBag *= bagCounts;
    console.log(`The total price of bags is: ${currentPriceBag.toFixed(2)} lv.`)
}

addBags(["63.80", "23", "3", "1"])