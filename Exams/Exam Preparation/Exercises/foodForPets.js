function foodForPets(input) {
    let index = 0;
    let countDays = Number(input[index]);//0
    index++;
    let totalAmountOfFood = Number(input[index]);//1
    index++;

    let biscuits = 0;
    let totalAmountOfFoodForDog = 0;
    let totalAmountOfFoodForCat = 0;

    for (let i = 1; i <= countDays; i++) {
        let eatenFromDog = Number(input[index]);//2  4 6
        index++;
        let eatenFromCat = Number(input[index]);//3  5 7
        index++;//4 6
        if (i % 3 === 0) {//3 6 9 day and etc
            biscuits += (eatenFromDog + eatenFromCat) * 0.10;
        }
        totalAmountOfFoodForDog += eatenFromDog;
        totalAmountOfFoodForCat += eatenFromCat;

    }

    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    let sumFood = totalAmountOfFoodForCat + totalAmountOfFoodForDog
    let totalEatenFood = ((sumFood) / totalAmountOfFood) * 100;
    console.log(`${totalEatenFood.toFixed(2)}% of the food has been eaten.`);
    let totalEatenDog = totalAmountOfFoodForDog / sumFood * 100;
    let totalEatenCat = totalAmountOfFoodForCat / sumFood * 100;
    console.log(`${totalEatenDog.toFixed(2)}% eaten from the dog.`);
    console.log(`${totalEatenCat.toFixed(2)}% eaten from the cat.`);

}

foodForPets(["3", "1000", "300", "20", "100", "30", "110", "40"])
