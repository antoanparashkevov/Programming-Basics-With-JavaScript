function hotelRoom(input) {

    let month = input[0];
    let nights = Number(input[1]);


    let studioPrice;
    let apartPrice;


    switch (month) {
        case "May":
        case "October":
            studioPrice = 50;
            apartPrice = 65;
            break;
        case "June":
        case "September":
            studioPrice = 75.20;
            apartPrice = 68.70;
            break;
        case "July":
        case "August":
            studioPrice = 76;
            apartPrice = 77;
            break;
    }
    if (nights > 14 && (month === "May" || month === "October")) {
        studioPrice = studioPrice * 0.70;
    } else if (nights > 7 && (month === "May" || month === "October")) {
        studioPrice = studioPrice * 0.95;
    } else if (nights > 14 && (month === "June" || month === "September")) {
        studioPrice = studioPrice * 0.80;
    }
    if (nights > 14) {
        apartPrice = apartPrice * 0.90;
    }

    console.log(`Apartment: ${(apartPrice * nights).toFixed(2)} lv.`)
    console.log(`Studio: ${(studioPrice * nights).toFixed(2)} lv.`)


}

hotelRoom(["August", "20"]);
