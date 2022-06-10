function flowerShop(input) {
    let countMagnolias = Number(input[0]);
    let countHyacinths = Number(input[1]);
    let countRoses = Number(input[2]);
    let countCactus = Number(input[3]);
    let giftPrice = Number(input[4]);

    let totalMagnolias = countMagnolias * 3.25;
    let totalHyacinths = countHyacinths * 4.00;
    let totalRoses = countRoses * 3.50;
    let totalCactus = countCactus * 8.00;
    let total = totalHyacinths + totalMagnolias + totalRoses + totalCactus;
    let tax = total * 0.05;
    let gain = total - tax;
    if (gain >= giftPrice){
    console.log(`She is left with ${Math.floor(gain-giftPrice)} leva.`);
    } else{
        console.log(`She will have to borrow ${Math.ceil(giftPrice-gain)} leva.`)
    }


}

flowerShop(["2", "3", "5", "1", "50"]);