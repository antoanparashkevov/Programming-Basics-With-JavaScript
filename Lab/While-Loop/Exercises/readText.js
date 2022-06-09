// function readText(input){
//     let index = 0;
//     let text = input[index];//0
//     index++;//1
//     while(text!== "Stop"){
//         console.log(text);
//         text = input[index]; //1  2
//         index++;//2  3
//     }
// }
//OR
function readText(input){
    let index = 0;
    let text = input[index];//0
    while(text!=="Stop"){
        // index++;
        console.log(text);
        index++;//1  2
        text = input[index];//1  2
    }
}

readText(["Nakov","SoftUni","Sofia","Bulgaria","SomeText","Stop", "AfterStop"])