function characterSequence(input){
let text = input[0];

    //we write < text.length, not <= text.length because
    //we count by indexes who starts from 0 to length -1
    for(let i = 0;i < text.length;i++){
        console.log(text[i])
    }
    //or
    // for(let i = 0;i <= text.length;i++){
    //     console.log(text.charAt(i))
    // }

}

characterSequence(["Softuni"]);