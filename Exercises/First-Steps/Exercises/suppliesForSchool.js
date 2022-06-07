//Example exam task
function suppliesForSchool(input) {
    let countPens = Number(input[0]);
    let countMarkers = Number(input[1]);
    let literCleaner = Number(input[2]);
    let discount = Number(input[3]) / 100;

    let onePen = 5.80;
    let oneMarker = 7.20;
    let oneLiter = 1.20;

    let totalPricePen = countPens * onePen;
    let totalPriceMarker = countMarkers * oneMarker;
    let totalPriceCleaner = literCleaner * oneLiter;

    let totalPrice = totalPricePen + totalPriceMarker + totalPriceCleaner;

    let totalPriceDiscount = totalPrice - (totalPrice * discount)
    console.log(totalPriceDiscount);

}

suppliesForSchool(["2", "3", "4", "25"]);
