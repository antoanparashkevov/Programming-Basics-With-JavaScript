function building(input) {
    let floors = Number(input[0]);
    let apartAndOffice = Number(input[1]);
    //in JS console.log prints and goes to the next line so every iteration prints on the new line
    //we reverse the loop for floors
    for (let i = floors; i > 0; i--) {
        // console.log(i)
        let res = "";//String variable
        for (let z = 0; z < apartAndOffice; z++) {
            if(i===floors){
                //this is concatenation
                res += "L" + i + z + " ";
            }else if(i%2===0){
                //this is concatenation
                res += "O" + i + z + " ";
            }else {
                //this is concatenation
                res += "A" + i + z + " ";
            }
            // console.log(i + "-" + z)//like this we will print every loop on new raw
            // res = res + " " + i + z + " ";
        }
        console.log(res)
    }

}

building(['6', '4'])