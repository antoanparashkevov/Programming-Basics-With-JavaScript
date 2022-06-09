function cinema(input){
    let type = input[0];
    let raw = Number(input[1]);
    let col = Number(input[2]);
    let ticket = 0;
    let rectangle = raw * col;
    let total = 0;
    if(type === "Premiere"){
        ticket = 12.00;
        total = ticket * rectangle;
        console.log(`${total.toFixed(2)} leva`);
    }else if(type === "Normal"){
        ticket = 7.50;
        total = ticket*rectangle;
        console.log(`${total.toFixed(2)} leva`);
    }else if (type === "Discount"){
        ticket = 5.00;
        total = ticket * rectangle;
        console.log(`${total.toFixed(2)} leva`);
    }
}

cinema(["Discount",
    "12",
    "30"])

