function yardGreening(input){
    let oneMeter = 7.61;
    let greenYard = Number(input[0]);
    let priceWithoutDiscount = (oneMeter * greenYard);

    //if the discount is 18%, we will multiply the fractional part( 18%/100 equal to 0.18)
    let discount = priceWithoutDiscount * 0.18;

    let finalPrice = priceWithoutDiscount - discount;

    //we use interpolation
    console.log(`The final price is: ${finalPrice} lv.`);

    //and again, we use interpolation
    console.log(`The discount is: ${discount} lv.`)
}

yardGreening(["150"])