function coins(input) {
    let change = Number(input[0])
    let inCoins = (change * 100).toFixed(2);
    let coinsCounter = 0;

    while (inCoins > 0) {
        if (inCoins >= 200) {
            coinsCounter++;
            inCoins = inCoins - 200;
        } else if (inCoins >= 100) {
            coinsCounter++;
            inCoins = inCoins - 100;
        } else if (inCoins >= 50) {
            coinsCounter++;
            inCoins = inCoins - 50;
        } else if (inCoins >= 20) {
            coinsCounter++;
            inCoins = inCoins - 20;
        } else if (inCoins >= 10) {
            coinsCounter++;
            inCoins = inCoins - 10;
        } else if (inCoins >= 5) {
            coinsCounter++;
            inCoins = inCoins - 5;
        } else if (inCoins >= 2) {
            coinsCounter++;
            inCoins = inCoins - 2;
        } else if (inCoins >= 1) {
            coinsCounter++;
            inCoins = inCoins - 1;
        }



    }
    console.log(coinsCounter)
}

coins(["2.49"]);