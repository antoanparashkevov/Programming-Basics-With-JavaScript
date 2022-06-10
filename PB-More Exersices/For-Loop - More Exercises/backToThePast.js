function backToThePast(input) {
    let inheritedMoney = Number(input[0]);
    let yearToLive = Number(input[1]);
    let evenSpentMoney = 0;
    let oddSpentMoney = 0;
    let ivanchoYear = 0;
    let savedMoney =0;
    let total = 0;
    for (let i = 1800; i <= yearToLive; i++) {
        if(i===1800){
            ivanchoYear = 18;
        }else if(i> 1800){
            ivanchoYear++
        }
        if (i % 2 === 0) {
            evenSpentMoney = 12000;


        }else  {

            oddSpentMoney = 12000 + (50 * ivanchoYear);


        }
        total = oddSpentMoney+evenSpentMoney;
        savedMoney = inheritedMoney-total


    }

    if (inheritedMoney >= savedMoney) {
        console.log(`Yes! He will live a carefree life and will have ${inheritedMoney - savedMoney} dollars left.`)
    } else {
        console.log(`He will need ${savedMoney - inheritedMoney} dollars to survive.`)
    }
}

backToThePast(["50000", "1802"])