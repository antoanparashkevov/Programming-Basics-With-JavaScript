function truckDriver(input) {
    let season = input[0];
    let kilometersPerMonth = Number(input[1]);
    let kilometersPerSeason = kilometersPerMonth * 4;
    let availableSeasons = ["Summer", "Winter", "Spring", "Autumn"];
    let pricePerKm = 0;
    let tax = 0;
    let salaryWithoutTax;
    let salary;
    if(season === availableSeasons[2] || season === availableSeasons[3]){
        if(kilometersPerMonth <=5000){
            pricePerKm = 0.75;
        }else if(kilometersPerMonth > 5000 && kilometersPerMonth <= 10000){
            pricePerKm = 0.95;
        }
    }else if(season === availableSeasons[0]){
        if(kilometersPerMonth <=5000){
            pricePerKm = 0.90;
        }else if(kilometersPerMonth > 5000 && kilometersPerMonth <= 10000){
            pricePerKm = 1.10;
        }
    }
    else if(season === availableSeasons[1]){
        if(kilometersPerMonth <=5000){
            pricePerKm = 1.05;
        }else if(kilometersPerMonth > 5000 && kilometersPerMonth <= 10000){
            pricePerKm = 1.25;
        }
    }
    if(kilometersPerMonth > 10000 && kilometersPerMonth <=20000){
        pricePerKm = 1.45;
    }
    salaryWithoutTax = pricePerKm * kilometersPerSeason;
    salary = salaryWithoutTax *0.90;
    console.log(salary.toFixed(2))

}

truckDriver(["Summer", "3455"])