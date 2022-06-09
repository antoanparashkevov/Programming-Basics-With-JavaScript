//IMPORTANT
//This symbols ( <, >, <=, >= ) compares the values and without caring about the type of the variables.
console.log(`solve`)
function solve() {
    let a = "6";
    let b = 6;


    // with 2 equals we want to equal 2 variables only by values, not type of the variables.
    // The result will be Boolean ( false or true )

    console.log(a == b);

}

solve();
console.log(`solve1`)
function solve1() {
    let a = "6";
    let b = 6;


    // With 3 equals we want to equal 2 variables by values and type of the variables.
    // The result will be Boolean ( false or true )
    console.log(a === b);

}

solve1();
console.log(`solve2`)
function solve2() {
    let a = 5;
    let b = 6;

    console.log(a > b);

}

solve2();
console.log(`solve3`)
function solve3() {
    let a = 6;
    let b = 6;

    //the equal sign is always written on the right side
    console.log(a >= b);
    console.log(a <= b);

}

solve3();
console.log(`solve4`)
function solve4() {
    let a = 6;
    let b = 6;

    console.log(a < b);

}

solve4();
console.log(`solve5`)
function solve5() {
    let a = "Antoan";
    let b = "Antoancho";


    //To compare two strings, it is so different between comparing numbers and comparing strings.
    //It compares the number of symbols.
    //Antoan has 6 symbols
    //Antoancho has 9 symbols
    console.log(a < b);

}

solve5();
console.log(`solve6`)
function solve6() {
    let a = "5";
    let b = 6;

    console.log(a < b);

}

solve6();
console.log(`solve7`)
function solve7() {
    let a = "8";
    let b = "8";
    let c = 9;
    let d = "9"
    //in this way we ask if one variable(type and value) is different from another
    //this exclamation mark is only on the left side.
    console.log(a !== b);
    console.log(c !== d);

}

solve7();
console.log(`solve8`)
function solve8() {
    let a = 8;
    let b = "8";

    //in this way we ask if one variable(ONLY COMPARING BY value) is different from another
    //this exclamation mark is only on the left side.
    console.log(a != b);

}

solve8();

console.log(`solve9`)
function solve9(){
    let a = 6===6;
    console.log(a)//this will return boolean expression
}

solve9();
console.log(`solve10`)
function solve10(){
    let a= 5;
    let isPossible = a > 6;
    console.log(isPossible);
}

solve10();