function evenPowersOfTwo(input){
let powers = Number(input[0]);

for(let i=0;i<=powers;i+=2){
    //first argument of Math.pow is the number
    //second argument of Math.pow is the powers
    let result = Math.pow(2,i)
    console.log(result)
}
//     let num = 1;
// for(let i = 0;i<=powers;i+=2){
//     console.log(num);
//     num = num *2*2;
// }

}
evenPowersOfTwo(["5"])