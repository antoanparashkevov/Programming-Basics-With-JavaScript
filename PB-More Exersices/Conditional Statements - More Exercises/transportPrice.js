function transportPrice(input) {
    let kilometers = Number(input[0]);
    let partOfDay = input[1];

    let taxy = ["0.70", "0.79", "0.90"];
    let startingPriceTaxy = Number(taxy[0]);
    let dayPriceTaxy = Number(taxy[1]);
    let nightPriceTaxy = Number(taxy[2]);

    let busPrice = 0.09;
    let train = 0.06;

    if (kilometers < 20 && partOfDay === "day") {
        let totalPrice = startingPriceTaxy + dayPriceTaxy * kilometers;
        console.log((totalPrice).toFixed(2));
    } else if (kilometers < 20 && partOfDay === "night") {
        let totalPrice = startingPriceTaxy + nightPriceTaxy * kilometers;
        console.log((totalPrice).toFixed(2));
    } else if (kilometers >= 20 && kilometers < 100) {
        let totalPrice = busPrice*kilometers;
        console.log((totalPrice).toFixed(2));
    } else if(kilometers >= 100){
        let totalPrice = train * kilometers;
        console.log((totalPrice).toFixed(2));
    }


}

transportPrice(["180", "night"])