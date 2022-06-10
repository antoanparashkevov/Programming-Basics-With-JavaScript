function pipesInPool(input){

    let volume = Number(input[0]);

    let pipe1PerHour = Number(input[1]);

    let pipe2PerHour = Number(input[2]);

    let absenceHours = Number(input[3]);

    let pipe1AllTime;
    let pipe2AllTime;
    let allPipes;
    let percentRemainPool;

    if(absenceHours > 1) {
        pipe1AllTime = absenceHours * pipe1PerHour;
        pipe2AllTime = absenceHours * pipe2PerHour;
    } else if(absenceHours === 1){
        pipe1AllTime = pipe1PerHour;
        pipe2AllTime = pipe2PerHour;
    } else {
        pipe1AllTime = pipe1PerHour/60 * absenceHours;
        pipe2AllTime = pipe2PerHour/60 * absenceHours;

    }


    allPipes = pipe1AllTime + pipe2AllTime;


        if(volume >= allPipes){
            percentRemainPool = allPipes/volume*100;
        }

    let pipe1FromAll = allPipes - pipe2AllTime;
    let percentPipe1 = pipe1FromAll/allPipes*100;


    let pipe2FromAll = allPipes - pipe1AllTime;
    let percentPipe2 = pipe2FromAll/allPipes*100;

    if(volume < allPipes){
        console.log(`For ${absenceHours.toFixed(2)} hours the pool overflows with ${(allPipes-volume).toFixed(2)} liters.`)
    } else if(volume >= allPipes){
        console.log(`The pool is ${percentRemainPool.toFixed(2)}% full. Pipe 1: ${percentPipe1.toFixed(2)}%. Pipe 2: ${percentPipe2.toFixed(2)}%."`)
    }


}

pipesInPool(["100","100","100","2.5"])