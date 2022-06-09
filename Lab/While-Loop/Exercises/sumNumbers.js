function sumNumbers(input) {
    let index = 0; // we initialize this variable in cases when we don't now how many element we have in the input
    let firstNumber = Number(input[index]); // index is 0
    index++;// index now is 1

    let sum = 0;
    let num = Number(input[index]); // on the first index of the array
    index++; //2 index
    sum = sum + num;
    //or sum +=num;
    while(sum < firstNumber){
        num = Number(input[index]); //2 index
        index++; //3,4,5 and to the end
        sum+=num;
    }

    console.log(sum);



}

sumNumbers(["100", "100", "20", "30", "40"]);
