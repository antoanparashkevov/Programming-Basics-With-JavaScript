function flowers(input) {
    let countChrysanthemums = Number(input[0]);
    let countRoses = Number(input[1]);
    let countTulips = Number(input[2]);
    let season = input[3];
    let isHoliday = input[4];
    let chrysanthemumsPrice;
    let rosesPrice;
    let tulipsPrice;
    let totalChrysanthemumsPrice;
    let totalRosesPrice;
    let totalTulipsPrice;
    let engagement = 2;
    let total;
    let totalAndEngagement;

        if (isHoliday === "N") {
            if (season === "Spring" || season === "Summer") {
                chrysanthemumsPrice = 2.00;
                rosesPrice = 4.10;
                tulipsPrice = 2.50;

            } else if (season === "Autumn" || season === "Winter") {
                chrysanthemumsPrice = 3.75;
                rosesPrice = 4.50;
                tulipsPrice = 4.15;
            }
            totalChrysanthemumsPrice = chrysanthemumsPrice * countChrysanthemums;
            totalRosesPrice = rosesPrice * countRoses;
            totalTulipsPrice = tulipsPrice * countTulips;
            total = totalChrysanthemumsPrice + totalRosesPrice + totalTulipsPrice;

            if (season === "Spring" && countTulips > 7) {
                total = total * 0.95;
            }
            if (season === "Winter" && countRoses >= 10) {
                total = total * 0.90;
            }
            if ((countChrysanthemums + countRoses + countTulips) > 20) {
                total = total * 0.80;
            }

            totalAndEngagement = total + engagement;
            console.log((totalAndEngagement).toFixed(2));

        }else if(isHoliday === "Y"){
            if (season === "Spring" || season === "Summer") {
                chrysanthemumsPrice = 2.00;
                rosesPrice = 4.10;
                tulipsPrice = 2.50;

            } else if (season === "Autumn" || season === "Winter") {
                chrysanthemumsPrice = 3.75;
                rosesPrice = 4.50;
                tulipsPrice = 4.15;
            }
            totalChrysanthemumsPrice = chrysanthemumsPrice * countChrysanthemums;
            totalRosesPrice = rosesPrice * countRoses;
            totalTulipsPrice = tulipsPrice * countTulips;
            total = totalChrysanthemumsPrice + totalRosesPrice + totalTulipsPrice;

            if (season === "Spring" && countTulips > 7) {
                total = total * 0.95;
            }
            if (season === "Winter" && countRoses >= 10) {
                total = total * 0.90;
            }
            if ((countChrysanthemums + countRoses + countTulips) > 20) {
                total = total * 0.80;
            }
            total = total *1.15;
            totalAndEngagement = total + engagement;
            console.log((totalAndEngagement).toFixed(2));
        }

}

flowers(["2", "4", "8", "Spring", "Y"])