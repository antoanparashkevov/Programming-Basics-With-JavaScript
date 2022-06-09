function fishingBoat(input){
let budget = Number(input[0]);
let season = input[1];
let countFisherMan = Number(input[2]);
let rent = 0;
switch (season){
    case "Spring":
        rent = 3000;
        break;
    case "Winter":
        rent = 2600;
        break;
    case "Autumn":
    case "Summer":
        rent = 4200;
        break;
}
if(countFisherMan <=6){
    rent = rent * 0.90
}else if (countFisherMan <= 11){
     rent = rent * 0.85;
    }else {
    rent = rent * 0.75;
}

if(countFisherMan %2 === 0 && season!== "Autumn"){
    rent = rent * 0.95;
}

if(budget < rent){
    console.log(`Not enough money! You need ${(rent - budget).toFixed(2)} leva.`)
} else{
    console.log(`Yes! You have ${(budget-rent).toFixed(2)} leva left.`)
}

}

fishingBoat(["3000","Summer","11"]);