// function fuelTank(input){
// let fuel = input[0];
// let liters = Number(input[1]);
//
// switch (fuel){
//     case "Diesel":
//     case "Gasoline":
//     case "Gas":
//         if(liters >=25){
//             console.log(`You have enough ${fuel.toLowerCase()}.`);
//         } else{
//             console.log(`Fill your tank with ${fuel.toLowerCase()}!`);
//         }
//         break;
//     default:
//         console.log("Invalid fuel!");
//         break;
// }
//
// }
//
// fuelTank(["Diesel","10"]);

function fuelTank(input) {
    let typeFuel = input[0];
    let liters = Number(input[1]);
    let card = input[2];

//No Discount
    let totalWithoutAnyDiscount = 0;
    if (typeFuel === "Gas" && card === "No" && liters < 20) {
        totalWithoutAnyDiscount = liters * 0.93;
        console.log(`${totalWithoutAnyDiscount.toFixed(2)} lv.`);
    } else if (typeFuel === "Diesel" && card === "No" && liters < 20) {
        totalWithoutAnyDiscount = liters * 2.33;
        console.log(`${totalWithoutAnyDiscount.toFixed(2)} lv.`);
    } else if (typeFuel === "Gasoline" && card === "No" && liters < 20) {
        totalWithoutAnyDiscount = liters * 2.22;
        console.log(`${totalWithoutAnyDiscount.toFixed(2)} lv.`);
    }
//With card, but under 20 liters
    if (typeFuel === "Gas" && card === "Yes" && liters < 20) {
        totalWithoutAnyDiscount = liters * 0.85;
        console.log(`${totalWithoutAnyDiscount.toFixed(2)} lv.`);
    } else if (typeFuel === "Diesel" && card === "Yes" && liters < 20) {
        totalWithoutAnyDiscount = liters * 2.21;
        console.log(`${totalWithoutAnyDiscount.toFixed(2)} lv.`);
    } else if (typeFuel === "Gasoline" && card === "Yes" && liters < 20) {
        totalWithoutAnyDiscount = liters * 2.04;
        console.log(`${totalWithoutAnyDiscount.toFixed(2)} lv.`);
    }
//    With card and between 20 and 25 liters

    if (typeFuel === "Gas" && card === "Yes" && liters >= 20 && liters <= 25) {
        totalWithoutAnyDiscount = liters * 0.85;
        let totalWithDiscount = totalWithoutAnyDiscount * 0.92;
        console.log(`${totalWithDiscount.toFixed(2)} lv.`);
    } else if (typeFuel === "Diesel" && card === "Yes" && liters >= 20 && liters <= 25) {
        totalWithoutAnyDiscount = liters * 2.21;
        let totalWithDiscount = totalWithoutAnyDiscount * 0.92;
        console.log(`${totalWithDiscount.toFixed(2)} lv.`);
    } else if (typeFuel === "Gasoline" && card === "Yes" && liters >= 20 && liters <= 25) {
        totalWithoutAnyDiscount = liters * 2.04;
        let totalWithDiscount = totalWithoutAnyDiscount * 0.92;
        console.log(`${totalWithDiscount.toFixed(2)} lv.`);
    }

//    With card and above 25 liters

    if (typeFuel === "Gas" && card === "Yes" && liters > 25) {
        totalWithoutAnyDiscount = liters * 0.85;
        let totalWithDiscount = totalWithoutAnyDiscount * 0.90;
        console.log(`${totalWithDiscount.toFixed(2)} lv.`);
    } else if (typeFuel === "Diesel" && card === "Yes" && liters > 25) {
        totalWithoutAnyDiscount = liters * 2.21;
        let totalWithDiscount = totalWithoutAnyDiscount * 0.90;
        console.log(`${totalWithDiscount.toFixed(2)} lv.`);
    } else if (typeFuel === "Gasoline" && card === "Yes" && liters > 25) {
        totalWithoutAnyDiscount = liters * 2.04;
        let totalWithDiscount = totalWithoutAnyDiscount * 0.90;
        console.log(`${totalWithDiscount.toFixed(2)} lv.`);
    }

//    Without card but between 20 and 25 liters

    if (typeFuel === "Gas" && card === "No" && liters >= 20 && liters <= 25) {
        totalWithoutAnyDiscount = liters * 0.93;
        let totalWithDiscount = totalWithoutAnyDiscount * 0.92;
        console.log(`${totalWithDiscount.toFixed(2)} lv.`);
    } else if (typeFuel === "Diesel" && card === "No" && liters >= 20 && liters <= 25) {
        totalWithoutAnyDiscount = liters * 2.33;
        let totalWithDiscount = totalWithoutAnyDiscount * 0.92;
        console.log(`${totalWithDiscount.toFixed(2)} lv.`);
    } else if (typeFuel === "Gasoline" && card === "No" && liters >= 20 && liters <= 25) {
        totalWithoutAnyDiscount = liters * 2.22;
        let totalWithDiscount = totalWithoutAnyDiscount * 0.92;
        console.log(`${totalWithDiscount.toFixed(2)} lv.`);
    }
//Without card but above 25 liters

    if (typeFuel === "Gas" && card === "No" && liters > 25) {
        totalWithoutAnyDiscount = liters * 0.93;
        let totalWithDiscount = totalWithoutAnyDiscount * 0.90;
        console.log(`${totalWithDiscount.toFixed(2)} lv.`);
    } else if (typeFuel === "Diesel" && card === "No" && liters > 25) {
        totalWithoutAnyDiscount = liters * 2.33;
        let totalWithDiscount = totalWithoutAnyDiscount * 0.90;
        console.log(`${totalWithDiscount.toFixed(2)} lv.`);
    } else if (typeFuel === "Gasoline" && card === "No" && liters > 25) {
        totalWithoutAnyDiscount = liters * 2.22;
        let totalWithDiscount = totalWithoutAnyDiscount * 0.90;
        console.log(`${totalWithDiscount.toFixed(2)} lv.`);
    }

}

fuelTank(["Gas","30","Yes"]);