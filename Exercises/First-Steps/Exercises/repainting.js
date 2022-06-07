function repainting(input) {

    let amountOfNylon = Number(input[0]);
    let amountOfDye = Number(input[1]);
    let amountOfThinner = Number(input[2]);
    let hour = Number(input[3]);

    let nylon = 1.5;
    let dyePerLiter = 14.5;
    let thinnerPerLiter = 5;
    let bags = 0.4;

    let sumNylon = (amountOfNylon + 2) * nylon;
    //amount of Dye + 10% = 110% = 1.10
    let sumDye = (amountOfDye * 1.10) * dyePerLiter;
    //OR
    // let sumDye = (amountOfDye + amountOfDye*0.10)*dyePerLiter;
    let sumThinner = amountOfThinner * thinnerPerLiter;

    let totalSum = sumNylon + sumDye + sumThinner +bags;
    let sumForCraftsmanPerHour = (totalSum*0.30);
    let totalSumForCraftsman=sumForCraftsmanPerHour*hour;
    let finalPrice = totalSum+totalSumForCraftsman
    console.log(finalPrice);


}

repainting(["10", "11", "4", "8"])