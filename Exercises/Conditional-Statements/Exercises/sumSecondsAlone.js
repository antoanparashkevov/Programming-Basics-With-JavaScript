function sumSecondsAlone(input){
    let sec1 = Number(input[0]);
    let sec2 = Number(input[1]);
    let sec3 = Number(input[2]);

    let totalSec = sec1 +sec2 +sec3;
    // console.log(totalSec)
    let minutes = Math.floor(totalSec/60);
    // console.log(minutes)
    let seconds = totalSec%10;
    // console.log(seconds)
    if(seconds < 10){
        console.log(`${minutes}:0${seconds}`)
    }else{
        console.log(`${minutes}:${seconds}`)
    }
}

sumSecondsAlone(["35","45","44"])