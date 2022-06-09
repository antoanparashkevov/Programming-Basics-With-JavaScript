function godzillaVsKong(input){
        let budget = Number(input[0]);
        let countExtras = Number(input[1]);
        let dressPricePerOneExtras = Number(input[2]);

        let decor = budget*0.10;

    let totalDressPrice = 0;
        if (countExtras > 150) {
            let discountDressPricePerOneExtras = dressPricePerOneExtras*0.90;
            totalDressPrice = discountDressPricePerOneExtras*countExtras;

        }else if (countExtras <= 150){
            totalDressPrice = countExtras*dressPricePerOneExtras;
        }

        let totalPriceFilm = totalDressPrice + decor;
       if(totalPriceFilm > budget){
           console.log("Not enough money!")
           console.log(`Wingard needs ${(totalPriceFilm- budget).toFixed(2)} leva more.`)
       }else{
           let moneyLeft = budget - totalPriceFilm;
           console.log(`Action!`);
           console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
       }
}

godzillaVsKong(["20000", "120", "55.5"])






