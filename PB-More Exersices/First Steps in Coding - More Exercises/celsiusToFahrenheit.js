function celsiusToFahrenheit(input){
let celsius = Number(input[0]);
let fahrenHeit = (celsius * 9/5) + 32;

console.log(fahrenHeit.toFixed(2));

}
celsiusToFahrenheit(["25"])