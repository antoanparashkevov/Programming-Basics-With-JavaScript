function lunchBreak(input) {

    let serial = input[0];
    let durationSerial = Number(input[1]);
    let durationRest = Number(input[2]);

    let lunchTime = durationRest / 8;
    console.log(lunchTime);
    let restTime = durationRest / 4;
    console.log(restTime);
    let busyTime = lunchTime + restTime;

    let freeTime = durationRest - busyTime;
    console.log(freeTime)

    if (freeTime >= durationSerial) {
        let remainingTime = freeTime - durationSerial;
        console.log(`You have enough time to watch ${serial} and left with ${Math.ceil(remainingTime)} minutes free time.`)
    } else {
        let neededTime = durationSerial - freeTime;
        console.log(`You don't have enough time to watch ${serial}, you need ${Math.ceil(neededTime)} more minutes.`)
    }


}

lunchBreak(["Teen Wolf", "48", "60"])

