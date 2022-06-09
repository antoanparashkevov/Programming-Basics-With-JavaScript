function tennisRanklist(input) {
    let tournamentsCount = Number(input[0]);
    let startingPoints = Number(input[1]);
    let points = startingPoints;
    let tournamentsWins = 0;
    let inputL = input.length;
    for (let i = 2; i < inputL; i++) {

        let stage = input[i];
        console.log(input[i]);
        switch (stage) {
            case "F":
                points += 1200;
                break;
            case "SF":
                points += 720;
                break;
            case "W":
                points += 2000;
                tournamentsWins++;
                break;
        }
    }
    let averagePoints = (points - startingPoints) / tournamentsCount;
    let percentWins = (tournamentsWins / tournamentsCount) * 100;//multiply by 100 because we want percentage.

    console.log(`Final points: ${Math.floor(points)}`)
    console.log(`Average points: ${Math.floor(averagePoints)}`)
    console.log(`${percentWins.toFixed(2)}% `)

}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"])
