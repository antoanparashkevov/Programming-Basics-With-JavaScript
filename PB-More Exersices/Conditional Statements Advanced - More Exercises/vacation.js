function vacation(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let availableSeasons = ["Summer", "Winter"];
    let locations = ["Alaska", "Morocco"];
    let availableAccommodation = ["Hotel", "Hut", "Camp"];
    let accommodation = "";
    let totalSum = 0;
    let realLoc = "";

    if (budget <= 1000) {
        accommodation = availableAccommodation[2];
        if (season === availableSeasons[0]) {
            realLoc = locations[0];
            totalSum = budget * 0.65;
        } else if (season === availableSeasons[1]) {
            realLoc = locations[1];
            totalSum = budget * 0.45;
        }
        console.log(`${realLoc} - ${accommodation} - ${totalSum.toFixed(2)}`)

    } else if (budget > 1000 && budget <= 3000) {
        accommodation = availableAccommodation[1];
        if (season === availableSeasons[0]) {
            realLoc = locations[0];
            totalSum = budget * 0.80;
        } else if (season === availableSeasons[1]) {
            realLoc = locations[1];
            totalSum = budget * 0.60;
        }
        console.log(`${realLoc} - ${accommodation} - ${totalSum.toFixed(2)}`)

    } else if (budget > 3000) {
        accommodation = availableAccommodation[0];
        if (season === availableSeasons[0]) {
            realLoc = locations[0];
            totalSum = budget * 0.90;
        } else if (season === availableSeasons[1]) {
            realLoc = locations[1];
            totalSum = budget * 0.90;
        }
        console.log(`${realLoc} - ${accommodation} - ${totalSum.toFixed(2)}`)
    }


}

vacation(["800", "Summer"]);