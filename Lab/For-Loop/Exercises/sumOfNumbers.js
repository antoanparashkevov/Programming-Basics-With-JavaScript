function sumOfNumbers(input){
    //we initialize variable of String type, not Number
    let num = input[0];
    //Can't be find the length of the Number type and that's why
    //we turn from number to text to display the length of the number


    //the other way is concatenation
    let textNum = "" + num;


    let sum = 0;

    for(let i = 0; i< textNum.length;i++){
        sum += Number(textNum[i]);

    }
    //we use interpolation
    console.log(`The sum of the digits is:${sum}`)
}

sumOfNumbers(["23"])