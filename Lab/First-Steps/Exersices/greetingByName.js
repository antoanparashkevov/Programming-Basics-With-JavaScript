function greetingByName(input) {
    let name = input[0];
    // console.log('Hello, ' + name + "!");//concatenation
    //OR
    console.log(`Hello, ${name}!`)//interpolation
}

greetingByName(["Antoan"]);