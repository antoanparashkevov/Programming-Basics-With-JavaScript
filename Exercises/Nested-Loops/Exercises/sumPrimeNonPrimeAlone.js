function sumPrimeNonPrimeAlone(input) {
    let index = 0;
    let command = input[index];

    let sumPrimeNum = 0;
    let sumNonPrimeNum = 0;

    while (command !== "stop") {
        let number = Number(command);

        if (number < 0) {
            console.log("Negative number.");
            index++;
            command = input[index];
            continue;
        }

        let isPrime = true;

        if (number === 1) {
            sumPrimeNum += number;
            index++;
            command = input[index]
            continue
        }

        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
            }
        }

        if (isPrime) {
            sumPrimeNum += number;
        } else {
            sumNonPrimeNum += number;
        }

        index++;
        command = input[index];

    }

    console.log(`Sum of all prime numbers is: ${sumPrimeNum}`)
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeNum}`)

}

sumPrimeNonPrimeAlone(["-3", "9", "0", "7", "19", "4", "stop"])