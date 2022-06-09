function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination = "";
    let finalSum = 0;
    let typeJourney = "";
    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            typeJourney = "Camp";
            finalSum = budget * 0.30;
        } else if (season === "winter") {
            typeJourney = "Hotel";
            finalSum = budget * 0.70;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            typeJourney = "Camp";
            finalSum = budget * 0.40;
        } else if (season === "winter") {
            typeJourney = "Hotel";
            finalSum = budget * 0.80;
        }
    } else if (budget > 1000) {
        destination = "Europe";
        typeJourney = "Hotel";
        finalSum = budget * 0.90;

    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${typeJourney} - ${finalSum.toFixed(2)}`);

}

journey(["50", "summer"])