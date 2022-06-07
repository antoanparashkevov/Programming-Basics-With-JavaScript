function foodDelivery(input) {
    let oneChickenMenu = 10.35;
    let oneFishMenu = 12.40;
    let oneVegetableMenu = 8.15;

    let countChickenMenu = Number(input[0]);
    let countFishMenu = Number(input[1]);
    let countVegetableMenu = Number(input[2]);

    let totalChickenMenu = oneChickenMenu * countChickenMenu;
    let totalFishMenu = oneFishMenu * countFishMenu;
    let totalVegetableMenu = oneVegetableMenu * countVegetableMenu;

    let totalPriceMenu = totalChickenMenu + totalFishMenu + totalVegetableMenu;

    let totalDesertPrice = totalPriceMenu * 0.20;
    let priceDelivery = 2.50;

    let totalPrice = totalPriceMenu + totalDesertPrice + priceDelivery;

    console.log(totalPrice);
}

foodDelivery(["2", "4", "3"])