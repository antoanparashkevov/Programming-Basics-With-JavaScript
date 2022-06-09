function refactorAreaOfFigures(input) {
    let type = input[0];
//square, rectangle, circle and triangle

    let result = 0;

    if (type === "square") {
        let a = Number(input[1]);
        result = a*a;
    } else if (type === "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        result = a * b;
    } else if (type === "circle") {
        let radius = Number(input[1])
        result = Math.PI*(radius * radius);
    } else {
        let a = Number(input[1])
        let h = Number(input[2])
        result = (a*h) / 2;
    }

    console.log(result.toFixed(3));
}

refactorAreaOfFigures(["square", "5", "20"])