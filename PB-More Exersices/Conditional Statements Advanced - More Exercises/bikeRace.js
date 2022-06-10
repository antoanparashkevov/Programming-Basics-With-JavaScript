function bikeRace(input) {
    let countJuniorBikers = Number(input[0]);
    let countSeniorBikers = Number(input[1]);
    let typeRace = input[2];
    let juniorPrice;
    let seniorPrice;
    let tax;
    let sum;
    let total;
    switch (typeRace) {
        case "trail":
            juniorPrice = countJuniorBikers * 5.50;
            seniorPrice = countSeniorBikers * 7;
            sum = juniorPrice + seniorPrice;
            tax = sum * 0.05;
            total = sum - tax;
            console.log(total.toFixed(2));
            break;
        case "cross-country":
            juniorPrice = countJuniorBikers * 8.00;
            seniorPrice = countSeniorBikers * 9.50;
            sum = juniorPrice + seniorPrice;
            tax = sum * 0.05;
            total = sum - tax;
            if(countJuniorBikers+countSeniorBikers >=50){
                total = total*0.75;
            }
            console.log(total.toFixed(2));
            break;
        case "downhill":
            juniorPrice = countJuniorBikers * 12.25;
            seniorPrice = countSeniorBikers * 13.75;
            sum = juniorPrice + seniorPrice;
            tax = sum * 0.05;
            total = sum - tax;
            console.log(total.toFixed(2));
            break;
        case "road":
            juniorPrice = countJuniorBikers * 20;
            seniorPrice = countSeniorBikers * 21.50;
            sum = juniorPrice + seniorPrice;
            tax = sum * 0.05;
            total = sum - tax;
            console.log(total.toFixed(2));
            break;
    }

}

bikeRace(["10", "20", "trail"]);
