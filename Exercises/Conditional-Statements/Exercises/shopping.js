function shopping(input){

let budget = Number(input[0]);
let countGraphicCards = Number(input[1]);
let countProcessors = Number(input[2]);
let countRAM = Number(input[3]);

let sumGraphicCards = countGraphicCards * 250;
let sumProcessors = sumGraphicCards*0.35 *countProcessors;
let sumRAM = sumGraphicCards*0.10*countRAM;
let sumAll = sumRAM+sumProcessors+sumGraphicCards;
console.log(sumRAM,sumProcessors,sumGraphicCards);

if(countGraphicCards > countProcessors){
    let discount = sumAll*0.15;
    sumAll-=discount;
}
console.log(sumAll)

if(budget >= sumAll){
    console.log(`You have ${(budget-sumAll).toFixed(2)} leva left!`)
}else{
    console.log(`Not enough money! You need ${(sumAll-budget).toFixed(2)} leva more!`)
}


}
shopping(["920.45", "3", "1", "1"])
