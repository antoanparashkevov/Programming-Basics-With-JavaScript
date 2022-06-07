function basketballEquipment(input){

    //we use only one entrance data
    let trainingPerYearPrice= Number(input[0]);

    let basketballSneakers = trainingPerYearPrice*0.60;
    console.log(basketballSneakers)
    let basketballOutfit = basketballSneakers*0.80;
    console.log(basketballOutfit)
    let basketballBall = basketballOutfit/4;
    console.log(basketballBall)
    let basketballAccessories = basketballBall / 5;
    console.log(basketballAccessories)

    let totalPrice = trainingPerYearPrice + basketballSneakers + basketballOutfit + basketballBall+ basketballAccessories;
    console.log(totalPrice);

}
basketballEquipment(["100"]);