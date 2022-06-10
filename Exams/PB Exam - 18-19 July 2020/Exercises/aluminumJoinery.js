function aluminumJoinery(input) {
    let countJoinery = Number(input[0]);
    let size = input[1];
    let isDelivery = input[2];
    let totalPrice = 0;

    let pricePerOneJoinery = 0;


    if (countJoinery < 10) {
        console.log(`Invalid order`);

    } else if (countJoinery >= 10) {


        switch (size) {
            case "90X130":
                pricePerOneJoinery = 110;
                totalPrice = pricePerOneJoinery * countJoinery;
                if (countJoinery > 30 && countJoinery <=60) {
                    totalPrice *= 0.95;
                } else if (countJoinery > 60) {
                    totalPrice *= 0.92;
                }else {
                    totalPrice *= 1.00;
                }

                break;
            case "100X150":
                pricePerOneJoinery = 140;
                totalPrice = pricePerOneJoinery * countJoinery;
                if (countJoinery > 40 && countJoinery <= 80) {
                    totalPrice *= 0.94;
                } else if (countJoinery > 80) {
                    totalPrice *= 0.90;
                } else {
                    totalPrice *= 1.00;
                }
                break;
            case "130X180":
                pricePerOneJoinery = 190;
                totalPrice = pricePerOneJoinery * countJoinery;
                if (countJoinery > 20 && countJoinery <=50) {
                    totalPrice *= 0.93;
                } else if (countJoinery > 50) {
                    totalPrice *= 0.88;
                } else {
                    totalPrice *= 1.00;
                }
                break;
            case "200X300":
                pricePerOneJoinery = 250;
                totalPrice = pricePerOneJoinery * countJoinery;
                if (countJoinery > 25 && countJoinery <=50) {
                    totalPrice *= 0.91;
                } else if (countJoinery > 50) {
                    totalPrice *= 0.86;
                } else {
                    totalPrice *= 1.00;
                }
                break;
        }
        if (isDelivery === "With delivery") {
            totalPrice += 60;
        } else if (isDelivery === "Without delivery") {
            totalPrice *=1.00;
        }

        if (countJoinery > 99) {
            totalPrice *= 0.96;
        }


        console.log(`${totalPrice.toFixed(2)} BGN`)
    }


}

aluminumJoinery(["105", "100X150", "With delivery"])