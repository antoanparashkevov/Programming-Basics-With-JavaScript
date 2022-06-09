function trekkingMania(input){
    let groupCount = Number(input[0]);
    //input.length has 11 elements, but we start from 0 and that's why we write < input.length in for loop
    let inputL = input.length
    console.log(`The length of the array is: ${inputL}`)
    let totalPeople = 0;

    //Musala
    let totalPeopleMusala = 0;
    let totalMusala;

    //MontBlanc
    let totalPeopleMontBlanc =0;
    let totalMontBlanc;

    //Kilimanjaro
    let totalPeopleKilimanjaro =0;
    let totalKilimanjaro;

    //K2
    let totalPeopleK2= 0;
    let totalK2;

    //Everest
    let totalPeopleEverest =0;
    let totalEverest;


    //loop from index 1 to index 10 because it is < inputL, not <=. inputL has 11 elements.
    for(let i = 1; i< inputL;i++){

        totalPeople+=Number(input[i]);
        console.log(`${i} element on this input array has value: ${input[i]}`);
     if(input[i]<=5){
         totalPeopleMusala+=Number(input[i]);
     }else if(input[i]>=6 && input[i]<=12){
         totalPeopleMontBlanc+=Number(input[i]);
     }else if(input[i]>=13 && input[i]<=25){
         totalPeopleKilimanjaro+=Number(input[i])
     }else if(input[i]>=26 && input[i]<=40){
         totalPeopleK2+=Number(input[i]);
     }else if(input[i]>=41){
         totalPeopleEverest+=Number(input[i])
     }




    }
    // console.log(totalPeople)
    //we multiply by 100 because we want to have this value like percentages.
    totalMusala = totalPeopleMusala/totalPeople*100;
    console.log(`${totalMusala.toFixed(2)}%`)//format 2 signs after the decimal mark
    totalMontBlanc = totalPeopleMontBlanc/totalPeople*100;
    console.log(`${totalMontBlanc.toFixed(2)}%`);
    totalKilimanjaro = totalPeopleKilimanjaro/totalPeople*100;
    console.log(`${totalKilimanjaro.toFixed(2)}%`);
    totalK2=totalPeopleK2/totalPeople*100;
    console.log(`${totalK2.toFixed(2)}%`);
    totalEverest = totalPeopleEverest/totalPeople*100;
    console.log(`${totalEverest.toFixed(2)}%`);



}

trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"])
