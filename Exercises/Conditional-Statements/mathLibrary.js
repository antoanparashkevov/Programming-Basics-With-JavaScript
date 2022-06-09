function mathLibrary(){
    let pi = Math.PI;
    console.log(pi);

    let number = 3.1;
    let power = 2;
    //rounding the number down
    console.log(Math.floor(number));
    //rounding the number above
    console.log(Math.ceil(number));

    //how to raise to some degree
    //first argument = the number that i want to raise to some degree
    //second argument = the degree
    console.log(Math.pow(number,power));

    //the biggest number from the argument in the method max
    console.log(Math.max(5,111,-20))

    //the lowest number from the argument in the method min
    console.log(Math.min(5,111,-20))

    console.log(Math.trunc(45.65))


    //change the number from Number to String Type
    let a = 3.5044
    console.log(a.toFixed(2));

}

mathLibrary()