function cake(input) {

    let length = Number(input[0]);
    let width = Number(input[1]);

    let sizeCake = length * width;

    let index = 2;
    let command = input[index];

    let numPeaces = 0; //count all peaces in all indexes after index 2

    while (command !== "STOP") {
        let cakeParts = Number(command);
        numPeaces += cakeParts;

        if (numPeaces > sizeCake) {
            console.log(`No more cake left! You need ${numPeaces - sizeCake} pieces more.`);
            break;
        }

        index++;
        command = input[index]

    }
    if (command === "STOP") {
        if (numPeaces <= sizeCake) {
            console.log(`${sizeCake - numPeaces} pieces are left.`);

        }
    }


}

cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"])

