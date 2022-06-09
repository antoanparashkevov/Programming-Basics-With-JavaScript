function histogram(input) {
    let numbersCount = Number(input[0]);
    let p1Count = 0;
    let p2Count = 0;
    let p3Count = 0;
    let p4Count = 0;
    let p5Count = 0;

    for (let i = 1; i <= numbersCount; i++) {  //we are looping from 1 index to numbersCount, because in this variable
        //we keep the count of numbers and that shows how many elements we have in the input array
        //like this we display all numbers from input[1] and above because we start from i=1, not from 0
        // console.log(input[i]);

        let currentNumber = Number(input[i]);

        if (currentNumber < 200) {
            p1Count++;
        } else if (currentNumber >= 200 && currentNumber <= 399) {
            p2Count++;
        } else if (currentNumber >= 400 && currentNumber <= 599) {
            p3Count++;
        } else if (currentNumber >= 600 && currentNumber <= 799) {
            p4Count++;
        } else {
            p5Count++;
        }

    }
    //we divide numbers count from the current range to the all numbers count and multiply by 100 to display the percentage
    console.log(`${(p1Count/numbersCount*100).toFixed(2)}%`);
    console.log(`${(p2Count/numbersCount*100).toFixed(2)}%`);
    console.log(`${(p3Count/numbersCount*100).toFixed(2)}%`);
    console.log(`${(p4Count/numbersCount*100).toFixed(2)}%`);
    console.log(`${(p5Count/numbersCount*100).toFixed(2)}%`);


}


histogram(["3", "1", "2", "999"]);