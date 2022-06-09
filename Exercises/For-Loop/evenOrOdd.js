function evenOrOdd(){
    for(let i = 1;i<=20;i++){
        if(i%2===0){
            console.log(`Even number: ${i}`);
        }
        // if(i%2!==0){
        //     console.log(`Odd number: ${i}`)
        // }
        //or
        if(i%2===1){
            console.log(`Odd number: ${i}`)
        }
    }

}
evenOrOdd()