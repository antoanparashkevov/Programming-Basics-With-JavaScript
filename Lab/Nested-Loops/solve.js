function solve(){
    //practice

    let i = 0;//initial value
    // while(i <=5){ //6 iterations
    //     console.log('SoftUni');  //print 6 times
    //     i++//incrementation
    // }

    // while(i==0){
    //     console.log('SoftUni');//this is infinity loop because we don't have incrementation and condition of while loop is equal to 0 all time
    //     if(i === 1){
    //         break;
    //     }
    // }

    // while(i < 6){
    //     i++
    //     if(i%2 === 0){
    //         console.log(i); //this will print 246 because we increment after we entered into while loop
    //     }
    // }

    // while(i<4){
    //     switch (i){
    //         case 1:
    //             console.log(i);
    //         case 2:
    //             console.log(i);//1123 because here we don't have break operator and this will print again the same value no matter
    //             //if it is matches or no
    //             break;
    //         case 3:
    //             console.log(i);
    //             break;
    //     }
    //     i++;
    //
    // }


//the best example for nested loops are the clock

    // for(let hours = 0; hours< 24;hours++){
    //     //on every iteration of the first loop(for hours) it creates new for loop inside his body
    //     for(let minutes = 0;minutes<60;minutes++){
    //         //until this loop for minutes ends and gives false,
    //         //the above loop for the hours stands without changing its value
    //         if(minutes<10){
    //             console.log(`${hours}:0${minutes}`);
    //         }else{
    //             //this quotes `` are called interpolation
    //             console.log(`${hours}:${minutes}`)
    //         }
    //
    //     }
    // }
//showing real time
console.log(new Date(Date.now()).getHours())
console.log(new Date(Date.now()).getMinutes())
}

solve();