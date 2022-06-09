function numbersDivisibleBy9(input){
let startNumber = Number(input[0])
let finishNumber = Number(input[1])
let sum = 0;
let res ="";
    for(let i = startNumber; i<=finishNumber;i++){

        if(i %9 ===0){
            sum +=i;
            //every number to new raw - > "\n"
            res += i + "\n"
        }
    }
    console.log(`The sum: ${sum}`)
    console.log(res)
    // for(let i = startNumber;i<=finishNumber;i++){
    //     if(i%9===0){
    //         console.log(i);
    //     }
    // }
}

numbersDivisibleBy9(["100","200"])