// function array(){
//     let arr = [
//         1,2,3,4,5,6
//     ];
//     //we want to accessible index who starts from 0.
//     console.log(arr[0]);
//     //we will print the whole array and the length of the array
//     console.log(arr,arr.length);
// }
//
// array();

// function array(input){
//     //we want to print from index 0 - > a
//     console.log(input[0]);
// }
//
// array(['a', 'b', 'c']);


//input is an argument of the array function
//argument = entrance data
//function array(input){
//     let name = input[0]; //index 0
//
//     //we want to print from index 0 - > Todor
//     console.log(name);
// }
//
// array(['Todor']);


// concatenation - That attaches two variables one to another
function array(input){
    let name = input[0];

    //this is not correct because 25 is a Number and we wrote this input like String
    //We can write like this - > let age = input[1] but in the entrance data we must write 25 like NUMBER ( without quotes )
    //let age = input[1];

    //Number method turns from String to Number type
    let age = Number(input[1]);

    // console.log(name,age);
    console.log(name);//Todor
    console.log(age + 1);//26
}

array(['Todor', "25"]);