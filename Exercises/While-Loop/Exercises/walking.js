function walking(input) {

    let goal = 10000;
    let stepsSum = 0;
    let index = 0;

    let command = input[index] //0 for start

    while (command !== "Going home") {
        let steps = Number(command);//parse to Number. That is the case when it is not a String but it is a Number
        stepsSum += steps;

        if (stepsSum >= goal) {
            console.log(`Goal reached! Good job!`);
            let difference = stepsSum- goal
            console.log(`${difference} steps over the goal!`)
            break;
        }
        index++;
        command = input[index];
    }

    // console.log(stepsSum)
    //this shows her steps before finding a String 'Going home'.


    if (command === "Going home") {
        // let stepsToHome = Number(input[index+1]);
        //or
        //we can use preINCREMENTATION,not postINCREMENTATION, because we want to display the new index, not the old.
        //with index++ we will display the current index Going home
        let stepsToHome = Number(input[++index]);
        stepsSum+=stepsToHome;
        if (stepsSum >= goal) {
            console.log(`Goal reached! Good job!`)
            let difference = stepsSum-goal
            console.log(`${difference} steps over the goal!`)

        } else {
            let difference = goal - stepsSum;
            console.log(`${difference} more steps to reach goal.`)
        }
    }
}

walking(["1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200"])

