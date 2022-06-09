function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let workingDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    let restDays = ["Saturday", "Sunday"];
    let priceOneFruit = 0;
    if (day === workingDays[0] || day === workingDays[1] || day === workingDays[2] || day === workingDays[3] || day === workingDays[4]) {
        if (fruit === "apple") {
            priceOneFruit = quantity * 1.20;
            console.log(priceOneFruit.toFixed(2));
        } else if (fruit === "banana") {
            priceOneFruit = quantity * 2.50;
            console.log(priceOneFruit.toFixed(2));
        } else if (fruit === "orange") {
            priceOneFruit = quantity * 0.85;
            console.log(priceOneFruit.toFixed(2));
        } else if (fruit === "grapefruit") {
            priceOneFruit = quantity * 1.45;
            console.log(priceOneFruit.toFixed(2));
        } else if (fruit === "kiwi") {
            priceOneFruit = quantity * 2.70;
            console.log(priceOneFruit.toFixed(2));
        } else if (fruit === "pineapple") {
            priceOneFruit = quantity * 5.50;
            console.log(priceOneFruit.toFixed(2));
        } else if (fruit === "grapes") {
            priceOneFruit = quantity * 3.85;
            console.log(priceOneFruit.toFixed(2));
        } else {
            console.log('error');
        }


    } else if (day === restDays[0] || day === restDays[1]) {
        if (fruit === "apple") {
            priceOneFruit = quantity * 1.25;
            console.log(priceOneFruit.toFixed(2));
        } else if (fruit === "banana") {
            priceOneFruit = quantity * 2.70;
            console.log(priceOneFruit.toFixed(2));
        } else if (fruit === "orange") {
            priceOneFruit = quantity * 0.90;
            console.log(priceOneFruit.toFixed(2));
        } else if (fruit === "grapefruit") {
            priceOneFruit = quantity * 1.60;
            console.log(priceOneFruit.toFixed(2));
        } else if (fruit === "kiwi") {
            priceOneFruit = quantity * 3.00;
            console.log(priceOneFruit.toFixed(2));
        } else if (fruit === "pineapple") {
            priceOneFruit = quantity * 5.60;
            console.log(priceOneFruit.toFixed(2));
        } else if (fruit === "grapes") {
            priceOneFruit = quantity * 4.20;
            console.log(priceOneFruit.toFixed(2));
        } else {
            console.log('error');
        }

    } else {
        console.log("error");
    }


}

fruitShop(["beer", "Monday", "2"]);