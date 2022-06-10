function fishLand(input) {
    let mackerelPricePerKg = Number(input[0]);
    let toyPricePerKg = Number(input[1]);
    let bonitoKg = Number(input[2]);
    let horseMackerelKg = Number(input[3]);
    let musselsKg = Number(input[4]);

    let bonitoPricePerKg = mackerelPricePerKg * 1.6;
    let horseMackerelPricePerKg = toyPricePerKg * 1.8;
    let musselsPricePerKg = 7.5;

    let totalBonitoPrice = bonitoKg * bonitoPricePerKg;
    let totalHorseMackerelPrice = horseMackerelKg * horseMackerelPricePerKg;
    let totalMusselsPrice = musselsKg * musselsPricePerKg;

    let totalPrice = totalBonitoPrice + totalHorseMackerelPrice + totalMusselsPrice
    console.log(totalPrice.toFixed(2));


}

fishLand(["6.9", "4.2", "1.5", "2.5", "1"])