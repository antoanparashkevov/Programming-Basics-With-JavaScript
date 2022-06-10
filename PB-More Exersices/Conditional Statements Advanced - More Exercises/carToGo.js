function carToGo(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let availableSeasons = ["Summer", "Winter"];
    let typeClass = "";
    let typeCar = "";
    let totalSum = 0;

    if (budget <= 100) {
        typeClass = "Economy class"
        console.log(typeClass)
        if (availableSeasons[0] === season) {
            typeCar = "Cabrio"
            totalSum = budget * 0.35;
            console.log(`${typeCar} - ${totalSum.toFixed(2)}`)
        } else if (availableSeasons[1] === season) {
            typeCar = "Jeep";
            totalSum = budget * 0.65;
            console.log(`${typeCar} - ${totalSum.toFixed(2)}`)
        }
    } else if (budget > 100 && budget <= 500) {
        typeClass = "Compact class"
        console.log(typeClass)
        if (availableSeasons[0] === season) {
            typeCar = "Cabrio"
            totalSum = budget * 0.45;
            console.log(`${typeCar} - ${totalSum.toFixed(2)}`)
        } else if (availableSeasons[1] === season) {
            typeCar = "Jeep";
            totalSum = budget * 0.80;
            console.log(`${typeCar} - ${totalSum.toFixed(2)}`)
        }
    } else if (budget > 500) {
        typeClass = "Luxury class";
        console.log(typeClass)
        totalSum = budget*0.90
        typeCar = "Jeep"
        console.log(`${typeCar} - ${totalSum.toFixed(2)}`)
    }


}

carToGo(["450", "Summer"]);