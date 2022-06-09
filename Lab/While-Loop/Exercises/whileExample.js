function whileExample(input){
    let index = 0; // array index set to 0
    let str = input[index]; //str = input[0]
    while (str !== "Stop") { //while input[0] !=="Stop"
        console.log("Infinite loop"); //Infinite loop
        index++; // incrementation
        str = input[index]; //str = input[1,2,3,4,5,6,....]
    }


}
whileExample(["Hello","Hello","Stop"])