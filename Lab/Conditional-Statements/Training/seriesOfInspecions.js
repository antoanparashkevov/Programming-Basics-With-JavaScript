//This is a complete constructions.
//In one function we are able to have only one if statement, one else statement and as much as i want else if statements
//The function is reading from up to down therefore if the first IF statement is true, this means that we finish and the rest code are going to be ignored.

function greaterNumber(input) {
    let number1 = Number(input[0])
    let number2 = Number(input[1])

    if (number1 > number2) {
        console.log(number1);
    } else if (number1 === number2) {
        console.log("Equal");
    } else {
        console.log(number2);
    }
}

greaterNumber(["10", "11"])


//We are able to remove the curly braces in if statement if we have ONLY one row to read like the down example.
//This example also show to us that the if statements are read from top to bottom
function greaterNumber1() {
    let a = 7;
    if (a > 4)
        console.log("Bigger than 4");//the program finishes here! Not continue yet.
    else if (a > 5)
        console.log("Bigger than 5");
    else
        console.log("Equal to 7");
}

greaterNumber1();