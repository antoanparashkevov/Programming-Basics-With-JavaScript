function newHouse(input) {
    let typeFlower = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);
    // let typeFlowers = input[0];
    // let countFlowers = Number(input[1]);
    // let budget = Number(input[2]);
    //
    //
    // if (typeFlowers === "Roses") {
    //     let totalRoses = 0;
    //     let totalRosesWithoutDiscount = 0;
    //     if (countFlowers > 80) {
    //         totalRosesWithoutDiscount = countFlowers * 5;
    //         let discount = totalRosesWithoutDiscount * 0.10;
    //         totalRoses = totalRosesWithoutDiscount - discount;
    //     }else {
    //         totalRosesWithoutDiscount = countFlowers * 5;
    //     }if(countFlowers > 80){
    //         if (budget >= totalRoses) {
    //             console.log(`Hey, you have a great garden with ${countFlowers} ${typeFlowers} and ${(budget - totalRosesWithoutDiscount).toFixed(2)} leva left."`)
    //         } else {
    //             console.log(`Not enough money, you need ${(totalRosesWithoutDiscount - budget).toFixed(2)} leva more.`)
    //         }
    //     }
    //     if (budget >= totalRoses) {
    //         console.log(`Hey, you have a great garden with ${countFlowers} ${typeFlowers} and ${(budget - totalRoses).toFixed(2)} leva left."`)
    //     } else {
    //         console.log(`Not enough money, you need ${(totalRoses - budget).toFixed(2)} leva more.`)
    //     }
    // } else if (typeFlowers === "Dahlias") {
    //     let totalDahlias = 0;
    //     let totalDahliasWithoutDiscount;
    //     if (countFlowers > 90) {
    //         totalDahliasWithoutDiscount = countFlowers * 3.80;
    //         let discount = totalDahliasWithoutDiscount * 0.15;
    //         totalDahlias = totalDahliasWithoutDiscount - discount;
    //     }else {
    //         totalDahliasWithoutDiscount = countFlowers * 3.80;
    //     }
    //     if(countFlowers > 90){
    //         if (budget >= totalDahliasWithoutDiscount) {
    //             console.log(`Hey, you have a great garden with ${countFlowers} ${typeFlowers} and ${(budget - totalDahliasWithoutDiscount).toFixed(2)} leva left."`)
    //         } else {
    //             console.log(`Not enough money, you need ${(totalDahliasWithoutDiscount - budget).toFixed(2)} leva more.`)
    //         }
    //     } else{
    //         if (budget >= totalDahlias) {
    //             console.log(`Hey, you have a great garden with ${countFlowers} ${typeFlowers} and ${(budget - totalDahlias).toFixed(2)} leva left."`)
    //         } else {
    //             console.log(`Not enough money, you need ${(totalDahlias - budget).toFixed(2)} leva more.`)
    //         }
    //     }
    //
    // }else if (typeFlowers === "Tulips") {
    //     let totalTulips = 0;
    //     let totalTulipsWithoutDiscount;
    //     if (countFlowers > 80) {
    //         totalTulipsWithoutDiscount = countFlowers * 2.80;
    //         let discount = totalTulipsWithoutDiscount * 0.15;
    //         totalTulips = totalTulipsWithoutDiscount - discount;
    //     }else {
    //         totalTulipsWithoutDiscount = countFlowers * 3.80;
    //     }
    //     if(countFlowers > 80){
    //         if (budget >= totalTulipsWithoutDiscount) {
    //             console.log(`Hey, you have a great garden with ${countFlowers} ${typeFlowers} and ${(budget - totalTulipsWithoutDiscount).toFixed(2)} leva left."`)
    //         } else {
    //             console.log(`Not enough money, you need ${(totalTulipsWithoutDiscount - budget).toFixed(2)} leva more.`)
    //         }
    //     } else{
    //         if (budget >= totalTulips) {
    //             console.log(`Hey, you have a great garden with ${countFlowers} ${typeFlowers} and ${(budget - totalTulips).toFixed(2)} leva left."`)
    //         } else {
    //             console.log(`Not enough money, you need ${(totalTulips - budget).toFixed(2)} leva more.`)
    //         }
    //     }
    //
    // }else if (typeFlowers === "Narcissus") {
    //     let totalNarcissus = 0;
    //     let totalNarcissusWithoutExpensive;
    //     if (countFlowers < 120) {
    //         totalNarcissusWithoutExpensive = countFlowers * 3.00;
    //         let expensive = totalNarcissusWithoutExpensive * 0.15;
    //         totalNarcissus = totalNarcissusWithoutExpensive + expensive;
    //     }else {
    //         totalNarcissusWithoutExpensive = countFlowers * 3.80;
    //     }
    //     if(countFlowers >= 120){
    //         if (budget >= totalNarcissusWithoutExpensive) {
    //             console.log(`Hey, you have a great garden with ${countFlowers} ${typeFlowers} and ${(budget - totalNarcissusWithoutExpensive).toFixed(2)} leva left."`)
    //         } else {
    //             console.log(`Not enough money, you need ${(totalNarcissusWithoutExpensive - budget).toFixed(2)} leva more.`)
    //         }
    //     } else{
    //         if (budget >= totalNarcissus) {
    //             console.log(`Hey, you have a great garden with ${countFlowers} ${typeFlowers} and ${(budget - totalNarcissus).toFixed(2)} leva left."`)
    //         } else {
    //             console.log(`Not enough money, you need ${(totalNarcissus - budget).toFixed(2)} leva more.`)
    //         }
    //     }
    //
    // }else if (typeFlowers === "Gladiolus") {
    //     let totalGladiolus = 0;
    //     let totalGladiolusWithoutExpensive;
    //     if (countFlowers < 80) {
    //         totalGladiolusWithoutExpensive = countFlowers * 3.00;
    //         let expensive = totalGladiolusWithoutExpensive * 0.20;
    //         totalGladiolus = totalGladiolusWithoutExpensive + expensive;
    //     }else {
    //         totalGladiolusWithoutExpensive = countFlowers * 3.80;
    //     }
    //     if(countFlowers >= 80){
    //         if (budget >= totalGladiolusWithoutExpensive) {
    //             console.log(`Hey, you have a great garden with ${countFlowers} ${typeFlowers} and ${(budget - totalGladiolusWithoutExpensive).toFixed(2)} leva left."`)
    //         } else {
    //             console.log(`Not enough money, you need ${(totalGladiolusWithoutExpensive - budget).toFixed(2)} leva more.`)
    //         }
    //     } else{
    //         if (budget >= totalGladiolus) {
    //             console.log(`Hey, you have a great garden with ${countFlowers} ${typeFlowers} and ${(budget - totalGladiolus).toFixed(2)} leva left."`)
    //         } else {
    //             console.log(`Not enough money, you need ${(totalGladiolus - budget).toFixed(2)} leva more.`)
    //         }
    //     }
    //
    // }
    let singleFlowerPrice = 0;
    let totalPriceFlower = 0;
    switch (typeFlower) {
        case "Roses":
            singleFlowerPrice = 5;
            totalPriceFlower = flowersCount * singleFlowerPrice;
            if (flowersCount > 80) {
                totalPriceFlower = totalPriceFlower * 0.90;
            }
            break;
        case "Dahlias":
            singleFlowerPrice = 3.80;
            totalPriceFlower = flowersCount * singleFlowerPrice;
            if (flowersCount > 90) {
                totalPriceFlower = totalPriceFlower * 0.85;
            }
            break;
        case "Tulips":
            singleFlowerPrice = 2.8;
            totalPriceFlower = flowersCount * singleFlowerPrice;
            if (flowersCount > 80) {
                totalPriceFlower = totalPriceFlower * 0.85;
            }
            break;
        case "Narcissus":
            singleFlowerPrice = 3;
            totalPriceFlower = flowersCount * singleFlowerPrice;
            if (flowersCount < 120) {
                totalPriceFlower = totalPriceFlower * 1.15;
            }
            break;
        case "Gladiolus":
            singleFlowerPrice = 2.5;
            totalPriceFlower = flowersCount * singleFlowerPrice;
            if (flowersCount < 80) {
                totalPriceFlower = totalPriceFlower * 1.20;
            }
            break;
    }
    if (budget >= totalPriceFlower) {
        console.log(`Hey, you have a great garden with ${flowersCount} ${typeFlower} and ${(budget - totalPriceFlower).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${(totalPriceFlower - budget).toFixed(2)} leva more.`)
    }


}

newHouse(["Roses", "81", "500"]);