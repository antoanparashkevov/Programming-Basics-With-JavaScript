function areaOfFigures(input) {
    let type = input[0];
//square, rectangle, circle and triangle

    if (type === "square") {
        let a = Number(input[1]);
        let result = a*a;
        //3 sign after decimal mark
        console.log(result.toFixed(3));
    } else if (type === "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        let result = a * b;
        console.log(result);
    } else if (type === "circle") {
        let radius = Number(input[1])
        let result = Math.PI*(radius * radius);
        console.log(result.toFixed(3));
    } else {
        let a = Number(input[1])
        let h = Number(input[2])
        let result = (a*h) / 2;
        console.log(result.toFixed(3));
    }
}

areaOfFigures(["triangle", "4.5", "20"])