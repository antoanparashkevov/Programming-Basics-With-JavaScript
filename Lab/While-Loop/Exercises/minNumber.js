function minNumber(input) {
    let index = 0; //index from an array starting from zero
    let command = input[index]//index 0
    index++;//1

    let minNumber = Number.MAX_SAFE_INTEGER;
    console.log(minNumber)//this display the max possible integer that we can reach.


    while (command !== "Stop") {
        let num = Number(command);//From string we turn to Number //index 0 //index 1


        if(num<minNumber){
            minNumber = num;
        }
        command = input[index];//index 1
        index++;//2

    }

    console.log(minNumber)

}

minNumber(["100", "99", "80", "70", "Stop"])
