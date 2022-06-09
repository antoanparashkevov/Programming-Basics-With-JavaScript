function sumNumbers(input) {

    let firstNumber = Number(input[0]);

    let index = 1;
    let otherNumbers = Number(input[index]);//1


    let sum = 0;

    if(firstNumber === otherNumbers){
        sum+=otherNumbers
    }

    index++//2

    // sum+=otherNumbers;  //sum is the value from the first index,
    //because it is possible that the value from the first index
    //is equal or more than our firstNumber



    while (firstNumber > sum) {
        sum += otherNumbers;
        otherNumbers = Number(input[index]);//2 //3
        index++ //3


    }
    console.log(sum)

}

sumNumbers(["100",
    "100",
    "20",
    "30",
    "40"])
