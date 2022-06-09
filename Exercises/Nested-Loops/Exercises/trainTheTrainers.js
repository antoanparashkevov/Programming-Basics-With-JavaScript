function trainTheTrainers(input) {
    let juryCount = Number(input[0]);
    let index = 1;
    let command = input[index];//1
    let countEvaluations = 0;
    let sumGrade = 0;

    while(command !== 'Finish'){
        countEvaluations++;
        let nameLecture = command;
        let eachLectureSumGrade = 0;



        for(let i = 0;i<juryCount;i++){//because that is the number of grades
            index++
            let evaluation = Number(input[index]);
            eachLectureSumGrade+=evaluation;
        }

        let tempAvgGrade = eachLectureSumGrade / juryCount;
        sumGrade+=tempAvgGrade
        console.log(`${nameLecture} - ${tempAvgGrade.toFixed(2)}.`);
        index++;
        command = input[index]


    }
    let totalAvgGrade = sumGrade / countEvaluations;
    console.log(`Student's final assessment is ${totalAvgGrade.toFixed(2)}.`)

}

trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"])