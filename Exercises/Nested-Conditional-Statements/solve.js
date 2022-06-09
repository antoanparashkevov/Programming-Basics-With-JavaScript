function solve() {
    let text = "Hello";
    switch (text) {
        case "Here":
            console.log("Word is here");
            //break stop the case if we find true result
            break;
        case "Hello":
            console.log("Right answer");
            break;
        //        default is just like else in if conditionals
        default:
            console.log("Error");
            break;
    }

//    nested conditional constructions
    let number = 15;

    if (number < 20) {
        if (number % 2 === 0) {
            console.log("Even number and under 20")
        } else {
            console.log("Number is odd and under 20")
        }
    }
    //&& is an operator that gives an opportunity to write two or more conditions
    //that must be always be true
    //|| is operator that only one is true, second isn't
    //! is sign for denial.
    //always execute the code in parentheses, it gives priority ()

}
solve();