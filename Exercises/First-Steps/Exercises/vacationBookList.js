function vacationBookList(input){
    let countPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let countDays = Number(input[2]);

    let totalTime = countPages/pagesPerHour;
    let hoursPerDay = totalTime / countDays;
    console.log(hoursPerDay);
}
vacationBookList(["212","20","2"]);