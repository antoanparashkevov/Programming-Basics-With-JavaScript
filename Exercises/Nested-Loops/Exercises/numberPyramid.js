function numberPyramid(input) {
    let n = Number(input[0]);

    let current = 1;//how many number we printed and the current one.
    let isBigger = false;//this boolean flag will help us to exit from the outer for loop.
    let printCurrentLine = "";//this empty string will help us to print numbers in line not each one on separate raw.


    for (let rows = 1; rows <= n; rows++) { //how many rows we need to have
        // console.log(rows)
    for(let cols = 1;cols<=rows;cols++){
        //in the first iteration we have 1 row and 1 col,
        //second iteration we have 2 row and 1 and 2 cols
        //rows vs cols equal to: 1 1 , 2 1 , 2 2 , 3 1 , 3 2 , 3 3 , 4 1 , 4 2 , 4 3 , 4 4 and etc
        //console.log(rows,cols) //we can see what exactly we have
        if(current > n){
            isBigger = true;
            break;//we stop the inner loop
        }
        //this is concatenation, not iteration
        printCurrentLine = printCurrentLine + current + " ";
        current++;
    }
    console.log(printCurrentLine);
    printCurrentLine = ""
        if(isBigger){
            break;
        }
    }

}

numberPyramid(['7'])