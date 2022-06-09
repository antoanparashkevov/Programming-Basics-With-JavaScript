function sumPrimeNonPrime(input) {
//prime number is Number which is divided only by 1 and by itself
    let sumPrimeNum = 0;
    let sumNonPrimeNum = 0;

    let index = 0;
    let command = input[index];

    while (command !== "stop") {
        let currentNumber = Number(command);

        if (currentNumber < 0) {
            console.log(`Number is negative.`);
            index++;
            command = input[index];
            continue;
        }

        let isPrime = true;

        if (currentNumber === 1) {
            sumPrimeNum += currentNumber;
            index++;
            command = input[index];
            continue;
        }
        for (let i = 2; i <= Math.sqrt(currentNumber); i++) {//currentNumber = 25  sqrt = 5
            if (currentNumber % i === 0) {
                isPrime=false;
            }
        }

        if(isPrime){
            sumPrimeNum+=currentNumber;
        }else{
            sumNonPrimeNum+=currentNumber;
        }

        index++;
        command = input[index];

    }
    console.log(`Sum of all prime numbers is: ${sumPrimeNum}`)
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeNum}`)
}

sumPrimeNonPrime(["30", "83", "33", "-1", "20", "stop"])