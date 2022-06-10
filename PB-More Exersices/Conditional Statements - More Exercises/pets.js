function pets(input){
let days = Number(input[0]);
let foodPerKg = Number(input[1]);
let foodDogPerKg = Number(input[2]);
let foodCatPerKg = Number(input[3]);
let foodTurtlePerGr = Number(input[4]);
let footTurtlePerKg = foodTurtlePerGr / 1000;
let totalEatFoodPerDay = foodCatPerKg + foodDogPerKg + footTurtlePerKg;
let totalEatFood = totalEatFoodPerDay * days;
if(foodPerKg >= totalEatFood){
    console.log(`${Math.floor(foodPerKg - totalEatFood)} kilos of food left.`)
} else{
    console.log(`${Math.ceil(totalEatFood - foodPerKg)} more kilos of food are needed.`)
}
}

pets(["2","10","1","1","1200"]);