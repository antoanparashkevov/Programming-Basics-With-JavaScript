function solve() {
    let name = 'John';

    //we initialize a value and we create cases(scenario) to find the value of the name.
    // (switch/case) works exactly like (if/else if/else if) but we don't have comparison operations here.


    //we don't put here boolean expression, we put a variable
    //case is just like if/else if/else if
    switch (name) {
        case "Jameson":
            console.log('Jameson');
            break;
        case "John":
            console.log('John');
            break;

        //default didn't accept a value;
        //this means that if it doesn't find in the cases the value of the variable
        //JUST LIKE ELSE
        //one difference between else and default is that default doesn't have to be on the last line
        default:
            console.log('Not find our value and display this message');
            break;
    }
//    break is an operator, case and default also
//    if we don't have break, we find a match, but we print all cases and default
//     coincidence = съвпадение
}

//in switch we compare by value and type ( just like === )
solve();