function solve(input) {
    // for (let i = 1; i <= 5; i++) {
    //     console.log(`With For loop: ${i}`)
    // }
    //
    // //the same thing but making with while loop
    // //accept one boolean expression
    // //first, we must have a local variable out of while scope
    // //second, we must have one boolean expression that sits in curly braces as one argument of while loop
    // //third, we must have step for each variable that sits in the body of while loop
    //
    // let num = 1;
    // while (num <= 5) {
    //     console.log(`With While loop: ${num}`);
    //     //this is infinity loop because we don't have third step.
    //     //we must have for example num++
    //     num++; //this is postINCREMENTATION
    // }

    let sum = 0;
    let budget = Number(input[0]);
    let index =1;
    let product = input[index];
    index++;//postINCREMENTATION
    while(product !== "Stop"){
        // console.log(product) //to display all items after 0 index
        switch (product) {
            case "coffee":
                sum+=1.5;
                break;
            case "beer":
                sum+=2;
                break;
            case "pizza":
                sum+=3;
                break;
        }
        if(budget<sum){
            console.log("Out Of Money!");
            break;
        }
        index++;//to go to the next index.
        product = input[index];//to go to the next indexes
        //or
        // product = input[++index]
    }
    if(budget>=sum){
        console.log("You can buy this products with your budget!")//we want to print once after we looping through all items
    }

//multiple choice. Type Alt and mark raws.
    
}


solve(["4","coffee","beer","pizza","beer","beer","Stop"]);