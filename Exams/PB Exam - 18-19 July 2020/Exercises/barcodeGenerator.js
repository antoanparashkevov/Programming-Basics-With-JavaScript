function barcodeGenerator(input) {
    let startNumber = input[0];//IMPORTANT! NOT Number(input[0]) because we will not be able to get the length of the array
    let endNumber = input[1];
    let printLine = '';
    // console.log(Number(startNumber[0])); //first digit of 3337 (3)
    // console.log(Number(startNumber[1])); //second digit of 3337 (3)
    // console.log(Number(startNumber[2])); //third digit of 3337 (3)
    // console.log(Number(startNumber[3])); //fourth digit of 3337 (7)
    for (let i0 = Number(startNumber[0]); i0 <= Number(endNumber[0]); i0++) {  //only first digits on every number in this scope
        for (let i1 = Number(startNumber[1]); i1 <= Number(endNumber[1]); i1++) { //only second digits on every number in this scope
            for (let i2 = Number(startNumber[2]); i2 <= Number(endNumber[2]); i2++) { //only third digits on every number in this scope
                for (let i3 = Number(startNumber[3]); i3 <= Number(endNumber[3]); i3++) { //only fourth digits on every number in this scope
                    if (i0 % 2 === 1 && i1 % 2 === 1 && i2 % 2 === 1 && i3 % 2 === 1) { //3%2 === 1 or 123%2 === 1
                        printLine = `${printLine} ${i0}${i1}${i2}${i3}`; //${printLine} is empty space
                    }
                }
            }
        }
    }
    console.log(printLine);
}

barcodeGenerator(["2345", "6789"])