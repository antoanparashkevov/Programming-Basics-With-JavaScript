function tradeCommissions(input){
let city = input[0];
let sells = Number(input[1]);
let commissions = 0;
switch(city){
    case "Sofia":
        if(sells >=0 && sells <=500){
            commissions = sells*0.05;
            console.log(commissions.toFixed(2));
        } else if(sells > 500 && sells <=1000){
            commissions = sells*0.07;
            console.log(commissions.toFixed(2));
        }else if(sells >1000 && sells <= 10000){
            commissions = sells* 0.08;
            console.log(commissions.toFixed(2));
        }else if(sells > 10000){
            commissions = sells * 0.12;
            console.log(commissions.toFixed(2));
        }
        else{
            console.log("error");
        }
        break;
    case "Varna":
        if(sells >=0 && sells <=500){
            commissions = sells*0.045;
            console.log(commissions.toFixed(2));
        } else if(sells > 500 && sells <=1000){
            commissions = sells*0.075;
            console.log(commissions.toFixed(2));
        }else if(sells >1000 && sells <= 10000){
            commissions = sells* 0.10;
            console.log(commissions.toFixed(2));
        }else if(sells > 10000){
            commissions = sells * 0.13;
            console.log(commissions.toFixed(2));
        }else{
            console.log("error");
        }
        break;
    case "Plovdiv":
        if(sells >=0 && sells <=500){
            commissions = sells*0.055;
            console.log(commissions.toFixed(2));
        } else if(sells > 500 && sells <=1000){
            commissions = sells*0.08;
            console.log(commissions.toFixed(2));
        }else if(sells >1000 && sells <= 10000){
            commissions = sells* 0.12;
            console.log(commissions.toFixed(2));
        }else if(sells > 10000){
            commissions = sells * 0.145;
            console.log(commissions.toFixed(2));
        }else{
            console.log("error");
        }
        break;
    default:
        console.log("error")

}


}

tradeCommissions(["Kaspichan",
    "-50"])
