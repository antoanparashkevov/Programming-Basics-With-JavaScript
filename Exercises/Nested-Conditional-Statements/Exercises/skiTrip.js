function skiTrip(input){
let days = Number(input[0]);
let night = days -1;
let type = input[1];
let rating = input[2];
let totalWithoutDiscount;
let discount = 0;
let totalWithDiscount;

        switch(type){
            case "room for one person":
                totalWithDiscount = night * 18.00;
                break;
            case "apartment":
                 totalWithoutDiscount = night *25.00;
                if(night < 10){
                    discount = 0.70;
                    totalWithDiscount = totalWithoutDiscount * discount

                }else if(night >=10 && night <=15){
                    discount = 0.65;
                    totalWithDiscount = totalWithoutDiscount*discount;

                }else if(night > 15){
                    discount = 0.50;
                    totalWithDiscount = totalWithoutDiscount * discount;

                }
                break;
            case "president apartment":
                 totalWithoutDiscount = night *35.00;
                if(night < 10){
                    discount = 0.90;
                    totalWithDiscount = totalWithoutDiscount * discount

                }else if(night >=10 && night <=15){
                    discount = 0.85;
                    totalWithDiscount = totalWithoutDiscount*discount;

                }else if(night > 15){
                    discount = 0.80;
                    totalWithDiscount = totalWithoutDiscount * discount;

                }

        }

        if(rating === "positive"){
            totalWithDiscount = totalWithDiscount * 1.25;
            console.log(totalWithDiscount.toFixed(2))
        } else if(rating === "negative"){
            totalWithDiscount = totalWithDiscount *0.90;
            console.log(totalWithDiscount.toFixed(2))
        }


}

skiTrip(["30", "president apartment", "negative"])



