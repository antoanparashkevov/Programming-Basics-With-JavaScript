function calculator(input) {
    let depositSum = Number(input[0]);
    let period = Number(input[1]);
    let percentage = Number(input[2])/100;
    let sum = depositSum + period * ((depositSum * percentage) / 12);

    console.log(sum);
}

calculator(["200", "3", "5.7"])