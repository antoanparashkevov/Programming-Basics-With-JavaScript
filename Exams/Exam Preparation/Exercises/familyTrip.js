function familyTrip(input) {
    let budget = Number(input[0]);
    let countNights = Number(input[1]);
    let pricePerNight = Number(input[2]);
    let percentMoreCosts = Number(input[3]);
    let fractionalNumber = percentMoreCosts /100;
    // console.log(fractionalNumber)
    let budgetWithoutCosts = budget * fractionalNumber;
    // console.log(budgetWithoutCosts)
    let totalBudget = budget - budgetWithoutCosts
    if(countNights > 7){
        pricePerNight = pricePerNight*0.95;
    }
    // console.log(pricePerNight)
    let costVacation = pricePerNight * countNights;

    if(totalBudget >= costVacation){
        console.log(`Ivanovi will be left with ${(totalBudget-costVacation).toFixed(2)} leva after vacation.`)
    }else{
        console.log(`${(costVacation-totalBudget).toFixed(2)} leva needed.`)
    }
}

familyTrip(["800.50", "8", "100", "2"])