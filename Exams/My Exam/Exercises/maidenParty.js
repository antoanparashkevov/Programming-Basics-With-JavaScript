function maidenParty(input) {
    let maidenPartyPrice = Number(input[0]);
    let countLoveMessages = Number(input[1]);
    let countWaxRoses = Number(input[2]);
    let countKeychains = Number(input[3]);
    let countCartoons = Number(input[4]);
    let countLuckSurprise = Number(input[5]);

    let totalSum = countLoveMessages * 0.60 + countWaxRoses * 7.20 + countKeychains * 3.60 + countCartoons * 18.20 + countLuckSurprise * 22;
    let totalCount = countLoveMessages + countWaxRoses + countKeychains + countCartoons + countLuckSurprise;
    if (totalCount > 25) {
        totalSum *= 0.65;
    }
    totalSum *= 0.90;

    if (maidenPartyPrice > totalSum) {
        console.log(`Not enough money! ${(maidenPartyPrice - totalSum).toFixed(2)} lv needed.`)
    } else {
        console.log(`Yes! ${(totalSum - maidenPartyPrice).toFixed(2)} lv left.`)
    }

}

maidenParty(["320", "8", "2", "5", "5", "1"])