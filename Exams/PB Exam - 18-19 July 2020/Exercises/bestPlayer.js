function bestPlayer(input) {
    let index = 0;
    let command = input[index];//0
    let bestScore = 0;
    let bestPlayer;
    while (command !== "END") {
        let playerName = command;//0 2
        index++;//1 3
        let currentScore = Number(input[index])//1 3
        if (currentScore > bestScore) {
            bestScore = currentScore;
            bestPlayer = playerName;
        }
        if (bestScore >= 10) {
            break;
        }
        index++;//2
        command = input[index]//2

    }
    console.log(`${bestPlayer} is the best player!`);
    if (bestScore >= 3) {
        console.log(`He has scored ${bestScore} goals and made a hat-trick !!!`)
    }else {
        console.log(`He has scored ${bestScore} goals.`)
    }
}

bestPlayer(["Petrov",
    "2",
    "Drogba",
    "11"])