function multiplyBy2(input){

    //shift method removes first item of an array and return it in the console
    //pop method removes last item of an array and return it in the console
    //shift and pop changes the original array
    let command = Number(input.shift());
    let sum = 0;

    while(true){
        if(command < 0){
            console.log("Negative number!");
            break;
        }

        sum = command * 2;
        console.log(`Result: ${sum.toFixed(2)}`);
        command = input.shift();
    }
}

multiplyBy2(["12","42","-1"]);

