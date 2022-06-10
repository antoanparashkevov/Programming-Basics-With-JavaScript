function agencyProfit(input) {
    let nameOfAgency = input[0];
    let adultsCountTickets = Number(input[1]);
    let childrenCountTickets = Number(input[2]);
    let adultsTicketPrice = Number(input[3]);
    let serviceTax = Number(input[4]);

    let currentChildrenTicketPrice = adultsTicketPrice * 0.3 + serviceTax;
    // console.log(currentChildrenTicketPrice)
    let currentAdultTicketPrice = adultsTicketPrice + serviceTax;

    let totalTicketPrice = adultsCountTickets*currentAdultTicketPrice + childrenCountTickets*currentChildrenTicketPrice;
    // console.log(totalTicketPrice);

    let gain = totalTicketPrice *0.20;
    // console.log(gain)

    console.log(`The profit of your agency from ${nameOfAgency} tickets is ${gain.toFixed(2)} lv.`)

}

agencyProfit(["WizzAir", "15", "5", "120", "40"])