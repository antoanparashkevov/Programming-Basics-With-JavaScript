function fruitMarket(x1,x2,x3,x4,x5){ //this was called single params
    let strawberriesPrice = Number(x1);
    let bananaPerKg = Number(x2);
    let orangePerKg = Number(x3);
    let raspberriesPerKg = Number(x4);
    let strawberriesPerKg = Number(x5);

    let totalSumStrawberries = strawberriesPrice*strawberriesPerKg;
    let raspberriesPrice = strawberriesPrice*0.5;
    let totalSumRaspberries = raspberriesPrice * raspberriesPerKg;
    let orangePrice = raspberriesPrice*0.6;
    let totalSumOrange = orangePrice*orangePerKg;
    let bananaPrice = raspberriesPrice*0.2;
    let totalSumBanana = bananaPrice * bananaPerKg;

    let totalSum = totalSumStrawberries + totalSumRaspberries + totalSumOrange + totalSumBanana;
    console.log(totalSum)
}


fruitMarket(["48","10","3.3","6.5","1.7"])
