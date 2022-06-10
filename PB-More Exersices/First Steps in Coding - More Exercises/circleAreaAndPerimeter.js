function circleAreaAndPerimeter(input){
    let r = Number(input[0]);
    let PI = Math.PI;
    let circleArea = PI*r*r;
    console.log(circleArea.toFixed(2));
    let circlePerimeter = 2* PI *r;
    console.log(circlePerimeter.toFixed(2))

}

circleAreaAndPerimeter(["3"])