function pcStore(input) {
    let dollarProcessor = Number(input[0]);
    let dollarVideo = Number(input[1]);
    let dollarRam = Number(input[2]);
    let countRam = Number(input[3]);
    let discountPercent = Number(input[4]);

    let BGNProcessor = dollarProcessor * 1.57;
    let BGNVideo = dollarVideo * 1.57;
    let BGNRam = dollarRam * 1.57;
    let totalBGNRam = BGNRam * countRam;
    let discount = 1 - discountPercent;
    let totalBGNProcessor = BGNProcessor * discount;
    let totalBGNVideo = BGNVideo * discount


    let totalPrice = totalBGNRam + totalBGNProcessor + totalBGNVideo

    console.log(`Money needed - ${totalPrice.toFixed(2)} leva.`)
}

pcStore(["200",
    "100",
    "80",
    "1",
    "0.01"])