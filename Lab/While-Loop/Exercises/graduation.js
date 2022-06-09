function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;

    let startClass = 1;
    let counterBadEvaluations = 0;

    let sumGrade = 0;

    let isExcluded = false;//boolean flag

    while (startClass <= 12) {
        let tempGrade = Number(input[index]);
        index++;
        // console.log(tempGrade);

        if (tempGrade < 4) {
            counterBadEvaluations++;//increase bad evaluation by 1
            if (counterBadEvaluations >= 2) {
                isExcluded = true;
                console.log(`${name} has been excluded at ${startClass} grade`)
                break;
            }
            continue;//one more chance
        }
        sumGrade += tempGrade;//current evaluations
        startClass++;//to the next class

    }
    if(!isExcluded){
        let averageGrade = sumGrade / 12;
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`)
    }



}

graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"])
