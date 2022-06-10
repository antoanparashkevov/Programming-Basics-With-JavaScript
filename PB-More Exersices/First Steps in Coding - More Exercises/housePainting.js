function housePainting(input) {
    let heightHouse = Number(input[0]);
    let widthHouse = Number(input[1]);
    let heightTriangleRoof = Number(input[2]);

    let frontAndBackWallWithDoor = 2 * (heightHouse * heightHouse);
    console.log(frontAndBackWallWithDoor);
    let doorArea = 1.2 * 2;
    console.log(doorArea);
    let frontAndBackWallWithoutDoor = frontAndBackWallWithDoor - doorArea;
    console.log(frontAndBackWallWithoutDoor);


    let sideWallsWithWindows = 2 * (heightHouse * widthHouse)
    console.log(sideWallsWithWindows);
    let windowArea = 2 * (1.5 * 1.5);
    console.log(windowArea)
    let sideWallsWithoutWindows = sideWallsWithWindows - windowArea;
    console.log(sideWallsWithoutWindows);

    let totalAreaWall = frontAndBackWallWithoutDoor + sideWallsWithoutWindows;
    console.log(totalAreaWall);

    let greenDye = totalAreaWall / 3.4;

    console.log(greenDye.toFixed(2));

    let rectangleRoof = 2 * (heightHouse * widthHouse);
    let triangleRoof = 2 * (heightHouse * heightTriangleRoof / 2);

    let roof = rectangleRoof + triangleRoof;
    console.log(roof)

    let redDye = roof / 4.3
    console.log(redDye.toFixed(2))

}

housePainting(["6", "10", "5.2"]);