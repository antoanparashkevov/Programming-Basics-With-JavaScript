function oscars(input) {

    let actorName = input[0];
    let startingPoints = Number(input[1]);
    let countEvaluators = Number(input[2]);//unnecessary variable
    let inputL = input.length;

    for (let i = 3; i < inputL; i += 2) { //we will pass on every odd index of this input array

        let actorsNames = input[i];//3 5 7
        let evaluatorsPoints = Number(input[i + 1]);//4 6 8
        let symbol = actorsNames.length;//because this variable is on String type, not Number
        console.log(`Count symbols on ${actorsNames} is: ${symbol}`);

        startingPoints = startingPoints + (symbol * evaluatorsPoints) / 2;
        if (startingPoints >= 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${startingPoints.toFixed(1)}!`);
            break;
        }
    }
    //after we passed all iterations we check if startingPoints is < 1250.5 we display this console.log
    if (startingPoints < 1250.5) {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - startingPoints).toFixed(1)} more!`);
    }

}

oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"])
