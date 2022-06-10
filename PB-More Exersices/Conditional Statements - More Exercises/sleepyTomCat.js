function sleepyTomCat(input) {

    let restDays = Number(input);  //това е броят почивни дни, въвеждаме входни данни и взимаме данните, като ги преобразуваме в число чрез Number()
    let oneYear = 365;   // една година колко дни има
    let workingDays = oneYear - restDays;  // работните дни са равни на една цяла година минус почивниде дни
    let normCat = 30000;  //това е нормата за игра на котето, като по условие ни е дадено толкова(минути)
    let workingDaysHours = workingDays * 63;  // умножаваме броя на работни дни с минутите на всеки ден(63)
    let restDaysHours = restDays * 127; // умножаваме броя на почивните дни с минутите на всеки ден(127)

    let totalTime = workingDaysHours + restDaysHours;  //общото време за игра


    if (totalTime > normCat) {  // ако общото време за игра е по-голямо от нормата, която котката може да поеме
        let fHours = (totalTime - normCat) / 60; //тогава от общото време за игра вадим нормата на котето (зашото общото време за игра е повече в този IF)
        //и го делим на 60, за да получим часовете, но тук се получава някакво число с плаваща запетая
        console.log(`Toва е часът, който е с плаваща запетая число за този момент --> ${fHours}`)
        //тук с метода trunc маха всичко след десетичната запетая, за да остане само кръглия час. Тоест от общото време,
        //като извадим нормата и разделим на 60,защото в 1 час има 60 минути, се получава КРЪГЪЛ ЧАС (цяло число)
        let rHours = Math.trunc((totalTime - normCat) / 60);
        console.log(`Toва е часът, който е цяло число --> ${rHours}`);
        //за да получим минутите, ние от числото с плаваща запетая на часовете(fHours), вадим цялото число на часовете(rHours) и умножаваме по 60,
        //защото 1 час има точно 60 минути

        let minutes = Math.round((fHours - rHours) * 60);
        console.log(`това са минутите --> ${minutes}`)


        console.log("Tom will run away");
        console.log(`${rHours} hours and ${minutes} minutes more for play`);
    } else if (normCat > totalTime) { // съшото, като горния IF, като логика, само че този пък нормата на котето е по-голяма от общото време
        let fHours = (normCat - totalTime) / 60;
        let rHours = Math.trunc((normCat - totalTime) / 60);
        let minutes = Math.round((fHours - rHours) * 60);

        console.log(`Tom sleeps well`)
        console.log(`${rHours} hours and ${minutes} minutes less for play`)
    }

}

sleepyTomCat("113"); // пробвай и с 20, за да влезе в другия IF