function petShop(input) {

    let priceDog = 2.50;
    let priceCat = 4;
    let countDog = Number(input[0]);
    let countCat = Number(input[1]);
    let finishPrice = (priceDog * countDog) + (priceCat * countCat);
    console.log(`${finishPrice} lv.`);//interpolation

}

petShop(["5","4"]);