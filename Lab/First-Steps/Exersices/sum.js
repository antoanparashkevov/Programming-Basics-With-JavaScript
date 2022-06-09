function solve(){
    let a = 13.5;
    let b = 4.4;
    //parseInt removes the fractional part and gives an integer
    let result = parseInt(a/b);


    //that is concatenation, not sum it. That attaches two variables one to another
    console.log("The sum is:" + a + b);

    //that is how to sum two variables( by parentheses )
    console.log("The sum is:" + (a + b))

    console.log(result);
//    in javascript there is no integer division. Only Number(who can be fractional part or Integer) and String(words)
}

solve();

//NaN => not a number
//This is a typical error

// % returns module/residue division
function residue(){
    let a = 7;
    let b = 2;
    let product = a % b;
    //this will return 1 (residue)

    console.log(`The residue is: ${product}`);
}
residue();