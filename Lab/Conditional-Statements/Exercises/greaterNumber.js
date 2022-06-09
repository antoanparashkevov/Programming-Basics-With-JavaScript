function greaterNumber(input) {
    let number1 = Number(input[0]);
    let number2 = Number(input[1]);

    //in one if statement we have ONLY one else
    // if(number1>number2){
    //     console.log(number1)
    // //    if the statement is true, else statement did"not checked yet.
    // }else{
    //     console.log(number2)
    // }


    //if we dont have {}, it can only read one line, not two or more
    //we put {} if we have a group of codes ( two or more )
    //example
    if (number2 > number1)
        console.log(number2)
    else
        console.log(number1)
}

greaterNumber(["5", "3"])