function solve() {
//instead of typing this
    let sum = 0;
    sum = sum + 1;
    sum = sum + 1;
    sum = sum + 1;

    console.log(sum);

    // we can do this by for-loop


    console.log("For Loop");

    //we initialize local variable
    //we must have 3 partitions
    //first place = start value
    //second place = end value
    //third place = the way in which our local variable must to change

    //initialize new variable and we use it in for-loop
    let output = '';
    for (let i = 1; i <= 3; i++) {
        //our body

        //every loop on а new raw
        console.log(i);
        //we can output the numbers on one raw
        output += `${i} `;


    }
    //we must print it out of the body loop because on every loop this will print the whole numbers
    console.log(output);
    //we can make infinity loop by make this mistakes
    // for(let i = 0; i <=10;){
    //     console.log(i);
    // }
    //OR
    // for(let i = 0;;i++){
    //     console.log(i);
    // }

    console.log("Reverse Loop")
    //we have make a reverse loop
    for(let i = 5;i>=1;i--){
        console.log(i)
    }

}

solve()