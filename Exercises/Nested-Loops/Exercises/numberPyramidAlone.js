function numberPyramidAlone(input) {

    let number = Number(input[0]);
    let current = 1;
    let isBigger = false;
    let toStr = "";

    for (let rows = 1; rows <= number; rows++) {
        // console.log(i);
        for (let cols = 1; cols <= rows; cols++) {
            // console.log(`${rows} <-> ${cols}`)//1 1, 2 1, 2 2
            if (current > number) {
                isBigger = true;
                break;
            }

            toStr+=+current+ " ";
            current++;
        }

        console.log(toStr);
        toStr="";
        if (isBigger) {
            break;
        }
    }
}

numberPyramidAlone(["7"])