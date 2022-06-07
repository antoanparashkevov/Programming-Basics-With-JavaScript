function aquarium(input){
//we use the entrance data and put it to four variables
let lengthAquarium = Number(input[0]);
let widthAquarium = Number(input[1]);
let heightAquarium = Number(input[2]);
let percentAquarium = Number(input[3]) / 100;  //to make it fractional number

console.log(percentAquarium)

let volumeAquarium = lengthAquarium*widthAquarium*heightAquarium;

console.log(volumeAquarium)

let volumePerLiters = volumeAquarium/1000;
let neededLiters = volumePerLiters*(1-percentAquarium);

console.log(neededLiters);
}

aquarium(["85","75","47","17"])