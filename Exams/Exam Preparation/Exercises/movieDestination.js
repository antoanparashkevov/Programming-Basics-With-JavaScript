function movieDestination(input) {
    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let countDays = Number(input[3]);
    let pricePerDay = 0;
    let totalPrice = 0;
    switch (season) {
        case "Winter":
            if (destination === "Dubai") {
                pricePerDay = 45000
            } else if (destination === "Sofia") {
                pricePerDay = 17000
            } else if (destination === "London") {
                pricePerDay = 24000
            }
            break;
        case "Summer":
            if (destination === "Dubai") {
                pricePerDay = 40000
            } else if (destination === "Sofia") {
                pricePerDay = 12500
            } else if (destination === "London") {
                pricePerDay = 20250
            }
            break;
    }
    totalPrice = countDays * pricePerDay

    if (destination === "Sofia") {
        totalPrice *= 1.25;
    } else if (destination === "Dubai") {
        totalPrice *= 0.70;
    } else {
        totalPrice *= 1.00;
    }

    if (budget >= totalPrice) {
        console.log(`The budget for the movie is enough! We have ${(budget - totalPrice).toFixed(2)} leva left!`)
    }else {
        console.log(`The director needs ${(totalPrice-budget).toFixed(2)} leva more!`)
    }

}

movieDestination(["400000", "Sofia", "Winter", "20"])