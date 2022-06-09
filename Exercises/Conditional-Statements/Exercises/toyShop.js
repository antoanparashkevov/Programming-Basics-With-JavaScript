function toyShop(input){
let tripPrice = Number(input[0]);
let puzzlesCount = Number(input[1]);
let dollsCount = Number(input[2]);
let bearsCount = Number(input[3]);
let minionsCount = Number(input[4]);
let trucksCount = Number(input[5]);

let puzzle = 2.60;
let doll = 3;
let bear = 4.1;
let minion = 8.2;
let truck = 2;

let totalPuzzlesPrice = puzzlesCount*puzzle;
let totalDollsPrice = dollsCount*doll;
let totalBearsPrice = bearsCount * bear;
let totalMinionsPrice = minionsCount*minion;
let totalTrucksPrice = trucksCount * truck;

let total  = totalPuzzlesPrice+totalDollsPrice+totalBearsPrice+totalMinionsPrice+totalTrucksPrice;

let countToys = puzzlesCount+dollsCount+bearsCount+minionsCount+trucksCount;

if(countToys >= 50){
    //OR LIKE THIS
    // total *= 0.75;
    //OR LIKE THIS
    let discount = total*0.25;
    total -=discount;


}
    let rent = total* 0.10;
    let gain = total - rent;

    if(gain >= tripPrice){
        console.log(`Yes! ${(gain - tripPrice).toFixed(2)} lv left.`)
    } else{
        console.log(`Not enough money! ${(tripPrice - gain).toFixed(2)} lv needed.`)
    }


}

toyShop(["40.8", "20", "25", "30", "50", "10"]);