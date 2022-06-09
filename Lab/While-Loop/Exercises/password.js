// function password(input) {
//     let index = 0;
//     let username = input[index];//0
//     index++;
//     let password = input[index];//1
//     index++;//2
//     let enterPassword = input[index];//2
//     index++;//3
//
//     while(password !== enterPassword){
//         // console.log("Error");
//         enterPassword = input[index];//3 4 5
//         index++;//4 5 6
//
//     }
//     console.log(`Welcome ${username}!`)
//
// }

//Or like that
function password(input) {
    let username = input[0];
    let password = input[1];
    let data = input[2];
    //'data' is magic number and that is not the best way to write this exercise.
    let index = 3;
    while (data !== password) {
        data = input[index];//3 4
        index++;//4 5
    }
    console.log(`Welcome ${username}!`);
}

password(["Antoan", "1234", "Pass", "1324", "12344"]);