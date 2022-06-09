//We are going to learn the scope of the variables.


//FIRST EXAMPLE - OUT OF THE FUNCTION SCOPE
// function scope(input) {
//     let currentDay = "Monday";
//     if (currentDay === "Monday") {
//         let salary = Number(input);
//     }
// }
// //This is wrong because
// //this 2 variables is out of the scope function
// console.log(salary);
// console.log(currentDay)
// scope("It is Monday!!!");


//SECOND EXAMPLE - OUT OF THE IF STATEMENT SCOPE
// function scope(){
//     let a = 7;
//     if(a>4){
//         let b = 10;
//         console.log("Bigger than 4");
//     }
//
//     console.log(b);//this variable is initialized in if scope and it is available only there!
// }
// //This is wrong because
// //(b) variable is initialized in the if statement, not outside and we are printing it outside the if statement.
// scope();

