function harvest(input){
let cropArea = Number(input[0]);
let kgGrapesPerMeter = Number(input[1]);
let neededWineLiters = Number(input[2]);
let employers = Number(input[3]);


let totalGrapes = cropArea*kgGrapesPerMeter;
let areaWine = totalGrapes*0.40;
let totalWineLiters = areaWine/2.5;

if(neededWineLiters <= totalWineLiters){
    let remaining = totalWineLiters - neededWineLiters;
    let perOnePerson = remaining / employers;
    console.log(`Good harvest this year! Total wine: ${Math.floor(totalWineLiters)} liters.`);
    console.log(`${Math.ceil(remaining)} liters left -> ${Math.ceil(perOnePerson)} liters per person.`);
} else if(neededWineLiters > totalWineLiters){
    let missing = neededWineLiters - totalWineLiters;
    console.log(`It will be a tough winter! More ${Math.floor(missing)} liters wine needed.`)
}


}


harvest(["1020","1.5","425","4"])

//1020
// 1.5
// 425
// 4