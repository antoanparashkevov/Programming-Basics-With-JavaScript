function balls(input) {
    let ballsCount = Number(input[0]);
    let index = 1;
    // let command = input[index];

    let totalPoints = 0;
    let redPoints = 0;
    let blackPoints = 0;
    let orangePoints = 0;
    let yellowPoints = 0;
    let whitePoints = 0;
    let otherPoints = 0;
    let dividedPoints = 0;


    let inputL = input.length;

    for (let i = index; i < inputL; i++) {
        let colors = input[index];

        switch (colors) {
            case "red":
                redPoints++;
                totalPoints += 5;
                break;
            case "black":
                blackPoints++;
                totalPoints /= Math.floor(2);
                dividedPoints++;
                break;
            case "white":
                whitePoints++;
                totalPoints += 20;
                break;
            case "orange":
                orangePoints++;
                totalPoints += 10;
                break;
            case "yellow":
                yellowPoints++;
                totalPoints += 15;
                break;
            default:
                otherPoints++;
                break;
        }
        index++;
        colors = input[index]
    }
    console.log(`Total points: ${Math.trunc(totalPoints)}`)
    console.log(`Red balls: ${redPoints}`)
    console.log(`Orange balls: ${orangePoints}`)
    console.log(`Yellow balls: ${yellowPoints}`)
    console.log(`White balls: ${whitePoints}`)
    console.log(`Other colors picked: ${otherPoints}`)
    console.log(`Divides from black balls: ${dividedPoints}`)
}

balls(['3', 'white', 'black', 'pink']);
