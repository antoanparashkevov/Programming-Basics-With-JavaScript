function equalSumsEvenOddPosition(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let printLine = '';
    for (let i = startNum; i <= endNum; i++) {
        //we start from startNum and we iterate until we reach endNum and concatenate by 1

        //we take currentNum from current position and we concatenate it with empty string
        let currentNum = "" + i;

        //we can see the difference by these two console.logs
        // console.log(currentNum);
        // console.log(i);


        let oddSum = 0;
        let evenSum = 0;


        //we transform it from Number to String to bring the length of the current number
        //we walk around on every digit
        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j))  //in this variable we keep every digit on every number
            // console.log(currentDigit)
            if (j % 2 === 0) {
                evenSum=evenSum+currentDigit;
            }else{
                oddSum = oddSum+currentDigit;
            }
        }

        if(oddSum===evenSum){
            printLine += `${i} `
        }
    }
    console.log(printLine)
}

equalSumsEvenOddPosition(["100000", "100050"])