function workingHours(input){
    let workingHours = Number(input[0]);
    let dayOfWeek = input[1];

    if(workingHours >= 10 && workingHours <= 18){
        if(dayOfWeek === "Monday" || dayOfWeek === "Tuesday" || dayOfWeek === "Wednesday" || dayOfWeek === "Thursday" || dayOfWeek === "Friday" || dayOfWeek === "Saturday"){
            console.log("open");
        } else{
            console.log('closed');
        }

    }else{
        console.log('closed');
    }

}

workingHours(["11","Monday"])