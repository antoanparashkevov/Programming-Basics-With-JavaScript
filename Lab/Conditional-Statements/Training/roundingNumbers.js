//Math is a library who shows the mathematics expressions

function roundingNumbers() {

    console.log(Math.PI);

    console.log(Math.ceil("3.15"))
    //Math.ceil() is method and in the circle brackets we put parameters and we rounding the number from fractional number to integer
    //Math.ceil is rounding the number up ( 4 )
    //Math.floor is rounding the number down ( 3 )
    console.log(Math.floor("3.99999"))

    //we cut the signs after the decimal mark  -- > 45
    console.log(Math.trunc("45.65"))

    let a = 5.5649;
    //toFixed formats the number by
    //how many sign we want to format the number(2) in this case
    console.log(a.toFixed(2))

    //WATCH THE DIFFERENCE BETWEEN a AND b AND c

    //toFixed change the number from Number to String type

    let b = 0.5;
    console.log(b.toFixed(2))

    let c = 4;
    //it adds two zeros after 4.
    console.log(c.toFixed(2))

    // The round() method rounds a number to the nearest integer.
    // Note: 2.49 will be rounded down (2), and 2.5 will be rounded up (3).
    let round1 = 2.50;
    let round2 = 2.49;
    console.log(Math.round(round1));
    console.log(Math.round(round2));
}

roundingNumbers()
