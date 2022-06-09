function oldBooks(input) {
    let herBook = input[0];
    let index = 1;

    let bookIsFound = false;

    let otherBooks = input[index];//1


    while (otherBooks!=="No More Books") {
       if(herBook===otherBooks){
           bookIsFound = true;
           break;
       }
       index++; //2  //3 ...
       otherBooks= input[index]; //2  //3 ...

    }
    if(bookIsFound === false){
        console.log('The book you search is not here!')
        console.log(`You checked ${index - 1} books.`);
    }else{
        console.log(`You checked ${index - 1} books and found it.`)
    }
}

oldBooks(["Troy", "Stronger", "Life Style", "Troy"])
