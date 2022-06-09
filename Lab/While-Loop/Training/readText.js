function readText(input){
let index =0;
let words = input[index];//0
    index++; //1

    while(words!=="Stop"){  //0
        console.log(words);

        words = input[index];//1  //2  //3
        index++;//2  //3  //4
    }



}
readText(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"])
