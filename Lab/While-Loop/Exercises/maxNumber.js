function maxNumber(input){
//we don't know how many element of the array we will have
    let index = 0;
    let command = input[index];// not Number() because we can have Stop
    index++;

    let maxNumber =Number.MIN_SAFE_INTEGER;//starts from the smallest number
    console.log(maxNumber) //that display the minimum integer that we can reach

    while(command!=="Stop"){
        let num = Number(command);
        if(num>maxNumber){
            maxNumber = num;
        }
        command = input[index];
        index++
    }

    console.log(maxNumber)



}


maxNumber(["100", "99", "80", "70", "Stop"])
