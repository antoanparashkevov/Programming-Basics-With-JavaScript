function trainTheTrainersAlone(input) {
    let juryCount = Number(input[0]);//0
    let index = 1;//1
    let command = input[index];//1
    let totalSumGrade = 0;
    let totalGradeCount = 0;

    while (command !== "Finish") {
        totalGradeCount++;
        let nameLecture = command;//1  //4
        let eachLectureSumGrade = 0;

        for(let i = 0;i<juryCount;i++){//0 1
            index++;//2  //3  //5  //6
            let grade = Number(input[index])//2  //3  //5 //6
            eachLectureSumGrade+=grade
        }

        let tempAvgGrade = eachLectureSumGrade/juryCount;
        totalSumGrade+=tempAvgGrade;
        console.log(`${nameLecture} - ${tempAvgGrade}.`);
        index++;//4
        command = input[index];//4


    }
    let totalAvgGrade = totalSumGrade/totalGradeCount;
    console.log(`Student's final assessment is ${totalAvgGrade}.`)

}

trainTheTrainersAlone(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"])