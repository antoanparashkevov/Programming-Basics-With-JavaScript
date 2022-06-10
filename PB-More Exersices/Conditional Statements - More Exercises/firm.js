function firm(input){
let neededHoursToMakeProject = Number(input[0]);
let freeDaysToMakeProject = Number(input[1]);
let countEmployees = Number(input[2]);

let totalFreeDays = freeDaysToMakeProject*0.90;
let totalWorkingHours = totalFreeDays*8;

let moreHoursExtraordinary = countEmployees * 2 *freeDaysToMakeProject;

let total = totalWorkingHours + moreHoursExtraordinary;
if(total < neededHoursToMakeProject){
    let total1 = neededHoursToMakeProject - total;
    console.log(`Not enough time!${Math.ceil(total1)} hours needed.`);
} else if(total >= neededHoursToMakeProject){
    console.log(`Yes!${Math.floor(total-neededHoursToMakeProject)} hours left.`)
}
}
firm(["99","3","1"])