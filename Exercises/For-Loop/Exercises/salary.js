function salary(input) {
    let tabs = Number(input[0]);
    let salary = Number(input[1]);
    let inputL = input.length;

    for (let i = 2; i < inputL; i++) {//last element is on input.length -1 position and that's why we type i < input.length
        let currentTab = input[i]
        switch (currentTab) {
            case "Facebook":
                salary -= 150;
                break;
            case "Instagram":
                salary -= 100;
                break;
            case "Reddit":
                salary -= 50;
                break;
        }
        if (salary <= 0) {
            console.log("You have lost your salary.");
            break;//we end the loop no matter how many cycles remain.
        }
    }
    if (salary > 0) {
        console.log(salary);
    }

}

salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"])
