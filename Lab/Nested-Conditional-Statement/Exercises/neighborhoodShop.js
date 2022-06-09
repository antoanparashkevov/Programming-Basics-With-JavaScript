function neighborhoodShop(input) {
    let product = input[0];
    let city = input[1];
    let amount = Number(input[2]);
    let result = 0;

    switch (city) {
        case "Sofia":
            switch (product){
                case "coffee":
                    result = amount * 0.50;
                    break;
                case "water":
                    result = amount * 0.80;
                    break;
                case "beer":
                    result = amount * 1.20;
                    break;
                case "sweets":
                    result = amount * 1.45;
                    break;
                case "peanuts":
                    result = amount * 1.60;
                    break;
            }
            break;
        case "Plovdiv":
            switch (product) {
                case "coffee":
                    result = amount * 0.40;
                    break;
                case "water":
                    result = amount * 0.70;
                    break;
                case "beer":
                    result = amount * 1.15;
                    break;
                case "sweets":
                    result = amount * 1.30;
                    break;
                case "peanuts":
                    result = amount * 1.50;
                    break;
            }
            break;
        case "Varna":
            switch (product) {
                case "coffee":
                    result = amount * 0.45;
                    break;
                case "water":
                    result = amount * 0.70;
                    break;
                case "beer":
                    result = amount * 1.10;
                    break;
                case "sweets":
                    result = amount * 1.35;
                    break;
                case "peanuts":
                    result = amount * 1.55;
                    break;
            }
            break;
    }
    console.log(result)
}

neighborhoodShop(["coffee", "Varna", "2"]);