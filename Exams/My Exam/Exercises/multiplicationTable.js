function multiplicationTable(input){
    let num = input[0];
    let digit0 = Number(num[0]);
    let digit1 = Number(num[1]);
    let digit2 = Number(num[2]);

    for(let i0 = 1;i0<=digit2;i0++){
        for(let i1 = 1;i1<=digit1;i1++){
            for(let i2=1;i2<=digit0;i2++){
                console.log(`${i0} * ${i1} * ${i2} = ${i0*i1*i2};`)
            }
        }
    }

}
multiplicationTable(["222"])