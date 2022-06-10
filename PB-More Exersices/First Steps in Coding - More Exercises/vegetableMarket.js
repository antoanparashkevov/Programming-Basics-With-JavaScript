function vegetableMarket(input) {
    let vegetablePrice = Number(input[0])
    let fruitsPrice = Number(input[1])
    let totalKgVegetables = Number(input[2])
    let totalKgFruits = Number(input[3])

    let totalVegetablePricePerLeva = vegetablePrice * totalKgVegetables;
    console.log(totalVegetablePricePerLeva)
    let totalFruitsPricePerLeva = fruitsPrice * totalKgFruits;
    console.log(totalFruitsPricePerLeva)

    let totalLeva = totalVegetablePricePerLeva + totalFruitsPricePerLeva;

    console.log(totalLeva)
    let totalEuro = totalLeva / 1.94
    console.log(totalEuro.toFixed(2))

}

vegetableMarket(["0.194", "19.4", "10", "10"])