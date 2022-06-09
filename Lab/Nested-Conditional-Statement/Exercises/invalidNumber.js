function invalidNumber(input) {
    let number = Number(input[0]);
    //circle braces have a priority
    let isValid = (number >= 100 && number <= 200) || number === 0;
    //not like that
    //  let isValid = number >= 100 && number <= 200 || number === 0;

    //OR just type
    // let isValid = number >= 100 || number <=200 || number === 0;

    if(!isValid){
        console.log("invalid");
    }


}

invalidNumber(["201"]);