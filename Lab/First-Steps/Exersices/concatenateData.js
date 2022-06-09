function concatenateData(input){
    let firstName = input[0];
    let lastName= input[1];
    let age = Number(input[2]);
    let town = input[3];

        //this was made with interpolation because we use tilda syntax(back-tick), not concatenation with "" and other syntax
        console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
}
concatenateData(["Antoan", "Parashkevov", "25", "Pleven"]);