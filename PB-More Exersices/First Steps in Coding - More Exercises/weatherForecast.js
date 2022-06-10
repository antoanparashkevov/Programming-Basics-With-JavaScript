//part 1

//     function weatherForecast(input){
//         if(input=="sunny"){
//             console.log("It's warm outside!");
//         }else if(input=="cloudy")
//             console.log("It's cold outside!");
//         else if(input=="snowy")
//             console.log("It's cold outside!");
//         else
//             console.log("It's cold outside!");
//     }
// weatherForecast("sunny")

//part 2

function weatherForecast(input) {
if(input >= 26.00 && input <= 35.00){
    console.log("Hot")
}else if(input >= 20.01 && input <= 25.9){
    console.log("Warm")
}else if(input >= 15.00 && input <= 20.00){
    console.log("Mild")
}else if(input >= 12.00 && input <= 14.9){
    console.log("Cool")
}else if(input >= 5 && input <= 11.9){
    console.log("Cold")
} else{
    console.log("unknown")
}

}

weatherForecast(8)