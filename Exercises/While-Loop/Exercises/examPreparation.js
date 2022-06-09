function examPreparation(input) {
    let countPoorGrades = Number(input[0]);
    let index = 1;
    let command = input[index]//index 1  (Money)
    let numberOfProblems = 0; // count exercises that we have passed.
    let sumGrades = 0;
    let countBadGrades = 0;

    while (command !== "Enough") {
        numberOfProblems++//first exercise
        index++//from index 2/4/6 amd etc
        let currentGrade = Number(input[index])//2  //4  //6 and etc
        sumGrades = sumGrades + currentGrade //no matter that the grade is bad or not, we must sum it
        if (currentGrade <= 4) {
            countBadGrades++

        }
        if (countBadGrades >= countPoorGrades) {
            console.log(`You need a break, ${countBadGrades} poor grades.`);
            break;

        }
        index++//3  //5 //7 and etc
        command = input[index];//3
    }

    if (command === "Enough") {
        let avg = sumGrades / numberOfProblems;
        console.log(`Average score: ${avg.toFixed(2)}`)
        console.log(`Number of problems: ${numberOfProblems}`)

        index -= 2;
        command = input[index];//-2 from Enough index
        let lastProblemName = command
        console.log(`Last problem: ${lastProblemName}`)
    }


}

examPreparation(["3",
    "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"])
