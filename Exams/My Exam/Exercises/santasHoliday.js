function santasHoliday(input){
        let days = Number(input[0]);
        let nights = days -1;
        let typeRoom = input[1];
        let grade = input[2];
        let sum = 0
        switch(typeRoom){
            case "room for one person":
                sum= nights*18.00;
                break;
            case "apartment":
                sum = nights*25.00;
                if(days<10){
                    sum*=0.70;
                }else if(days >=10 && days<=15){
                    sum*=0.65;
                }else if(days>15){
                    sum*=0.50;
                }
                break;
            case "president apartment":
                sum = nights*35.00;
                if(days<10){
                    sum*=0.90;
                }else if(days >=10 && days<=15){
                    sum*=0.85;
                }else if(days>15){
                    sum*=0.80;
                }
                break;
        }
        if(grade === "positive"){
            sum*=1.25;
        }else if(grade === "negative"){
            sum*=0.90;
        }

        console.log(sum.toFixed(2))
}

santasHoliday(["2",
    "apartment",
    "positive"])