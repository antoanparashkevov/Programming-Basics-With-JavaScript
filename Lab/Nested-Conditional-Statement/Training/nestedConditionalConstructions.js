function nestedConditionalConstructions() {
    let conditional1 = 2;
    let conditional2 = 3;
    //only if the first conditional1 is true, we will go ahead to the second conditional2
    if (conditional1 === 2) {
        console.log("Test");
        if (conditional2) {
            console.log("Test2");
        } else {
            console.log("Error")
        }
    }


}

nestedConditionalConstructions();