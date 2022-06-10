function schoolCamp(input) {
    let season = input[0];
    let availableSeasons = ["Winter", "Spring", "Summer"];
    let typeOfGroup = input[1];
    let availableTypeOfGroup = ["boys", "girls", "mixed"];
    let countStudents = Number(input[2]);
    let countNights = Number(input[3]);
    let pricePerOneNight = 0;
    let sport = "";

    if (season === availableSeasons[0]) {
        if (typeOfGroup === availableTypeOfGroup[0] || typeOfGroup === availableTypeOfGroup[1]) {
            pricePerOneNight = 9.60;
            if(typeOfGroup === availableTypeOfGroup[0]){
                sport = "Judo"
            }else if(typeOfGroup === availableTypeOfGroup[1]){
                sport = "Gymnastics"
            }
        } else if (typeOfGroup === availableTypeOfGroup[2]) {
            pricePerOneNight = 10;
            sport = "Ski"
        }
    } else if (season === availableSeasons[1]) {
        if (typeOfGroup === availableTypeOfGroup[0] || typeOfGroup === availableTypeOfGroup[1]) {
            pricePerOneNight = 7.20;
            if(typeOfGroup === availableTypeOfGroup[1]){
                sport = "Athletics"
            }else if (typeOfGroup === availableTypeOfGroup[0]){
                sport = "Tennis"
            }
        } else if (typeOfGroup === availableTypeOfGroup[2]) {
            pricePerOneNight = 9.50;
            sport = "Cycling"
        }
    }
    else if (season === availableSeasons[2]) {
        if (typeOfGroup === availableTypeOfGroup[0] || typeOfGroup === availableTypeOfGroup[1]) {
            pricePerOneNight = 15;
            if(typeOfGroup === availableTypeOfGroup[0]){
                sport = "Football"
            }else if (typeOfGroup === availableTypeOfGroup[1]){
                sport = "Volleyball"
            }
        } else if (typeOfGroup === availableTypeOfGroup[2]) {
            pricePerOneNight = 20;
            sport = "Swimming"
        }
    }
let discount = 0;
    if(countStudents >=50){
        discount = 0.50;
    }else if(countStudents >=20 && countStudents<50){
        discount = 0.85;
    }else if(countStudents >=10 && countStudents < 20){
        discount = 0.95;
    }else{
        discount = 1;
    }
    let totalWithoutDiscount = pricePerOneNight * countNights * countStudents;
    let totalWithDiscount = totalWithoutDiscount * discount;
    console.log(`${sport} ${totalWithDiscount.toFixed(2)} lv.`)
}

schoolCamp(["Winter", "mixed", "9", "15"]);