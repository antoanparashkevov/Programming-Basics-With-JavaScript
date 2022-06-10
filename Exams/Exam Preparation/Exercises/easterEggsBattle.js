function easterEggsBattle(input) {
    let eggsCountP1 = Number(input[0]);
    let eggsCountP2 = Number(input[1]);
    let index = 2;
    let command = input[index];//2
    // index++;//3

    let isPlayerOut = false;//boolean flag
    while (command !== "End of battle") {
        let win = command;

        switch (win) {
            case "one":
                eggsCountP2--
                break;
            case "two":
                eggsCountP1--;
                break;
        }

        if (eggsCountP1 === 0) {
            console.log(`Player one is out of eggs. Player two has ${eggsCountP2} eggs left.`);
            isPlayerOut = true;
            break;
        } else if (eggsCountP2 === 0) {
            console.log(`Player two is out of eggs. Player one has ${eggsCountP1} eggs left.`);
            isPlayerOut = true;
            break;
        } else {
            index++;//just increase index here, not on 6 and 32 line
            command = input[index];//3
            // index++;//4
        }
    }

    if (!isPlayerOut) {//if we have End of battle entry, we will display the count of eggs on each two players
        console.log(`Player one has ${eggsCountP1} eggs left.`)
        console.log(`Player two has ${eggsCountP2} eggs left.`)
    }


}

easterEggsBattle(["5", "4", "one", "two", "one", "two", "two", "End of battle"]);
