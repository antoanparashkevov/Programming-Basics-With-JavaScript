function  equalSumsEvenOddPositionAlone(input){
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let printLine = '';

    for(let i = startNum;i<=endNum;i++){
        // let currentNum = ""
        // currentNum+=+i + "";
        //or
        let currentNum = "" + i;

        let oddSum = 0;
        let evenSum = 0;

        for(let j = 0;j<currentNum.length;j++){
            let currentDigit = Number(currentNum.charAt(j));

            if(j%2 === 0){
                evenSum+=currentDigit
            }else{
                oddSum+=currentDigit;
            }
        }

        if(oddSum===evenSum){
            // console.log(currentNum)//to print this in one row
            // printLine+=+currentNum + " "
            //or
            printLine+=`${currentNum} `
        }
    }
    console.log(printLine)
}
equalSumsEvenOddPositionAlone(["100000","100050"])