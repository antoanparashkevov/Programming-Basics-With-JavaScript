function worldSwimmingRecord(input) {
    let recordPerSeconds = Number(input[0]);
    let rangePerMeters = Number(input[1]);
    let timePerSecondsForOneMeter = Number(input[2]);

    let totalSecondsWithoutDelay = rangePerMeters * timePerSecondsForOneMeter;
    console.log(totalSecondsWithoutDelay)

    let delaySeconds = Math.floor(rangePerMeters / 15) * 12.5;
    console.log(delaySeconds);

    let totalTimeWithDelay = totalSecondsWithoutDelay + delaySeconds;
    console.log(totalTimeWithDelay);

    if (totalTimeWithDelay < recordPerSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${totalTimeWithDelay.toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${(totalTimeWithDelay - recordPerSeconds).toFixed(2)} seconds slower.`)
    }


}

worldSwimmingRecord(["55555.67", "3017", "5.03"])

