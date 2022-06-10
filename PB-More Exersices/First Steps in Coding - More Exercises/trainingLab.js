function trainingLab(input) {
    let widthPerMeters = Number(input[0]);
    let heightPerMeters = Number(input[1]);
    let lostPlaces = 3;
    let widthPerCentimeters = widthPerMeters * 100;
    let heightPerCentimetersWithHallway = heightPerMeters * 100;

    let heightPerCentimetersWithoutHallway = heightPerCentimetersWithHallway - 100;

    let deskPerRow = Math.trunc(heightPerCentimetersWithoutHallway / 70);
    console.log(Math.trunc(deskPerRow))

    let countRow = Math.trunc(widthPerCentimeters / 120);
    console.log(Math.trunc(countRow));

    let countFreePlaces = Math.trunc(countRow*deskPerRow) - lostPlaces;

    console.log(countFreePlaces);

}

trainingLab(["15", "8.9"])