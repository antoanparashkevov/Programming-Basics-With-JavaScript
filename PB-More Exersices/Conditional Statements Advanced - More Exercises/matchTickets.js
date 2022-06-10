function matchTickets(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let countGroupPeople = Number(input[2]);
    let priceTicket;
    let tripPrice=0;
    if (category === "Normal") {
        priceTicket = 249.99;
    } else if (category === "VIP") {
        priceTicket = 499.99;
    }
    if(countGroupPeople >=1 && countGroupPeople <= 4){
        tripPrice = budget*0.75;

    }else if(countGroupPeople >=5 && countGroupPeople <=9){
        tripPrice = budget*0.60;
    }else if(countGroupPeople >=10&& countGroupPeople <=24){
        tripPrice = budget*0.50;
    }else if(countGroupPeople >=25 && countGroupPeople <=49){
        tripPrice = budget*0.40;

    }else if(countGroupPeople >=50){
        tripPrice = budget*0.25;

    }

    let remainingBudget = budget - tripPrice;
    let allPriceTicket = priceTicket*countGroupPeople;
    if(remainingBudget >= allPriceTicket){
        console.log(`Yes! You have ${(remainingBudget-allPriceTicket).toFixed(2)} leva left.`)
    }else if(remainingBudget < allPriceTicket){
        console.log(`Not enough money! You need ${(allPriceTicket-remainingBudget).toFixed(2)} leva.`)
    }
}

matchTickets(["30000", "VIP", "49"]);