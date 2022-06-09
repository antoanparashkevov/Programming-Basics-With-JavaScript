function solve(input){
    let name = input[0];
    let age = Number(input[1]);
    //this `` is tilda(back-tick). We use templates/interpolation. This uses different syntax
    console.log(`Hello, ${name}! I am ${age} old`)
}
solve(['Antoan',"25"])