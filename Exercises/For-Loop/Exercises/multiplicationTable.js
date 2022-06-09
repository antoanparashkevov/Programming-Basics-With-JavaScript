function multiplicationTable(input){
    let numberToMultiply = Number(input[0]);
    let result = 0;
    let multiplicationNumber
    for(let i=1;i<=10;i++){
         multiplicationNumber= Number(i)
        result = i * numberToMultiply;
        console.log(`${i} * ${numberToMultiply} = ${result}`)
    }
    console.log("last iteration")
    //or we can print only last iteration from loop
    console.log(`${multiplicationNumber} * ${numberToMultiply} = ${result}`)

}

multiplicationTable(['5']);