function forLoop(input){
    //we repeat the same action many times
    console.log(`With many raws`);
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    console.log(6);
    console.log(7);

    console.log("With For Loop");

    //For operator has 3 components
    //First - Initialize the variable with let, some name and starting value
    //Second - some condition to know when to finish the loop
    //Third - and what we want to happen on every iteration(loop)
    for(let i =1; i<=7;i= i+1){

        //this is our body of for-loop
        console.log(input[i]);//we can print from 1 index to 7 index all variables in our input array
        //or just print numbers from 1 to 7
        console.log(i);
    }


}
forLoop(["antoan1","antoan2","antoan3","antoan4","antoan5","antoan6","antoan7","antoan8"]);