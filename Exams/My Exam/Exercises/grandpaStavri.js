function grandpaStavri(input) {
    let index = 0;
    let countDays = Number(input[index]);//0
    index++;
    let totalAmountRakia = 0;
    let sumDegreesPerDay =0;
    for(let i = 1;i<=countDays;i++){
        let amountRakia = Number(input[index]);
        index++;
        let degrees = Number(input[index]);
        index++;
        sumDegreesPerDay = sumDegreesPerDay + (amountRakia * degrees);
        totalAmountRakia+=amountRakia;
    }

    console.log(`Liter: ${totalAmountRakia.toFixed(2)}`);
    let avgDegrees = sumDegreesPerDay / totalAmountRakia;
    console.log(`Degrees: ${avgDegrees.toFixed(2)}`);
    if(avgDegrees < 38){
        console.log(`Not good, you should baking!`);
    }else if(avgDegrees >=38 && avgDegrees <=42){
        console.log(`Super!`)
    }else if(avgDegrees >42){
        console.log(`Dilution with distilled water!`)
    }

}

grandpaStavri(["2",
    "200",
    "43",
    "200",
    "40"])