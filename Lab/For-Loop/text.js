function text(){
    let text = "Softuni"
    let txt = text.length
    console.log(txt)//we will print the numbers of the letters
    //we print the individual letter on the current index from 0 to N
    console.log(text[0])
    console.log(text[1])
    console.log(text[2])
    console.log(text[3])
    console.log(text[4])
    console.log(text[5])
    console.log(text[6])
    //max 6 indexes, not 7. That way we will output 'undefined'. We start from 0 to length -1 and that's why we don't have 7
    console.log(text[7])

    //No output if we don't have that index, empty raw.
    //Empty spaces was ignored by trim function of JavaScript
    console.log(text.charAt(7));
    //the same like
    console.log(text[7])

}
text()