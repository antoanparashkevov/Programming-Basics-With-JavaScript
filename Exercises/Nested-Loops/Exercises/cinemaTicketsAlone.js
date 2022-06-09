function cinemaTicketsAlone(input) {
    let index = 0;
    let command = input[index];//0

    let standardCounter = 0;
    let studentCounter = 0;
    let kidsCounter = 0;
    let totalTicketsCounter = 0;//this variable will keep all tickets count from all cinemas

    while(command!=="Finish"){
        let name = command;//0
        index++;//1
        let freeSpaces = Number(input[index]);//1
        index++;//2
        let typeTicket = input[index];//2

        let ticketCounter = 0;//this variable will keep tickets for the current cinema movie.
        while(typeTicket!=="End"){
            ticketCounter++;

            switch (typeTicket){
                case "standard":
                    standardCounter++;
                    break;
                case "student":
                    studentCounter++;
                    break;
                case "kid":
                    kidsCounter++;
                    break;
            }
            if(ticketCounter >= freeSpaces){
                break;
            }

            typeTicket= input[++index]//PRE-Incrementation

        }
        totalTicketsCounter+=ticketCounter;
        console.log(`${name} - ${((ticketCounter/freeSpaces)*100).toFixed(2)}% full.`);
        command = input[++index];


    }

    console.log(`Total tickets: ${totalTicketsCounter}`);
    console.log(`${((studentCounter/totalTicketsCounter)*100).toFixed(2)}% student tickets.`)
    console.log(`${((standardCounter/totalTicketsCounter)*100).toFixed(2)}% standard tickets.`)
    console.log(`${((kidsCounter/totalTicketsCounter)*100).toFixed(2)}% kids tickets.`)

}

cinemaTicketsAlone(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])