function solve() {
    // for(;;){
    //     console.log("Infinity loop");
    // }

    //While loop
    let text = "input";
    console.log(text[0]);// we get the first letter of the word 'input' (i)


    console.log("For Loop");
    for(let i=1;i<=5;i++){
        console.log(i);
    }

    //we can do this with While Loop
    //In While Loop we have only 1 component(that is condition), not 3 like For-Loop
    //We must initialize the variable out of the While scope
    console.log("While Loop");
    let a =1;
    while(a<=5){
        console.log(a);
        a++;//post-incrementation
    }
    //While accept only one condition. It stops while it find false condition
    //but that is the wrong way to write While Loop
    console.log("While Loop");
    let e=1;//initialize variable out of the scope
    while(true){//while this boolean flag is true.
        if(e > 10){
            break;
        }
        //break is an operator that finish the current scope
        console.log("e = " + e);

        //post-incrementation
        e++;
    }
    console.log("While Loop");
    //that is the currect way to write While Loop
    let f = 1;
    while (f <= 5) {
        console.log("а = " + f);

        f++;
    }

    //continue is an operator that skips the current iteration of the loop
    console.log("While Loop with Continue Operator")
    let i = 1;//1
    while (i <= 10) { //1 <= 10 ? YES
        if (i % 2 !== 0) {  //IF 2/2 === 0 ? YES
            i++ //INCREMENTATION
            continue;   //the code after continue operator is skipped and passes only through the loop condition
        }
        console.log(`Even Numbers: ${i}`);
        i++
    }

}

solve();