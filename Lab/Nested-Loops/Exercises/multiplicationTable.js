function multiplicationTable() {
    // for (let x = 1; x <= 10; x++) {
    //     for (let y = 1; y <= 10; y++) {
    //         console.log(`${x} * ${y} = ${x * y}`);
    //     }
    // }
    let isNeedToStop = false;//boolean flag
    for (let x = 1; x <= 10; x++) {
        for (let y = 1; y <= 10; y++) {
            if(y === 5){
                isNeedToStop = true;
                break;//this break operator will stop only nested loop
            }
            console.log(`${x} * ${y} = ${x * y}`);
        }
        if(isNeedToStop){ //this is how to stop outer loop(the for loop with 'x' variable
            break;
        }
    }

}

multiplicationTable();