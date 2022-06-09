function numbersNto1(input){
    let num = Number(input[0]);


    //we use decrementation and to be precise we use post-decrementation
    // for(let i = num;i >=1;i--){
    //     console.log(i)
    // }
    //or
    for(let i = num;i>=1;){
        console.log(i)
        i--;
    }
}

numbersNto1(["10"])