function logicalOperators() {

//      && checks if 2 statements or more are true
//      returns boolean expression
//      If only one statement bring back false, all boolean expression returns false
//      that means it must all statements returns true
    let number1 = 5;
    let number2 = 10;
    let number3 = 8;

    if (number1 < number2 && number2 > number3) {
        console.log("True with &&");
    }

//    || are like OR word. We check 2 statements that
//    the first one will be true/false,
//    the second one will be true/false
//    it must only one statement to return true and the all expression
//    will return true


    if (number1 < number2 || number2 < number3) {
        console.log("True with ||");
    }


    let isValid = true;
    //! is logical operator that turns from true to false and
    //from false to true
    if (!isValid) {
        console.log("Invalid");
    } else {
        console.log("Valid")
    }

}

logicalOperators()