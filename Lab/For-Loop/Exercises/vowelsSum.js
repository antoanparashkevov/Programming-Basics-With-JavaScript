function vowelsSum(input) {
    let text = input[0];
    let result = 0;
    //ch = character(symbol)
    for (let i = 0; i < text.length; i++) {
        let ch = text[i];//in this variable we store all letters of the text step by step
        console.log(ch)
        switch (ch) {
            case 'a':
                result += 1;
                break;
            case "e":
                result += 2;
                break;
            case "i":
                result += 3;
                break;
            case "o":
                result += 4;
                break;
            case "u":
                result += 5;
                break;

        }
        // console.log(text[i])
    }
console.log(result)
}

vowelsSum(["Softuni"])