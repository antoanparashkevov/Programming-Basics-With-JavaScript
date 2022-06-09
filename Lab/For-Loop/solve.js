function solve() {
    //now we are learning for-loops
    //we can increase or decrease the value of the variable
    let a = 1;
    console.log("Incrementation")
    //this is incrementation.
    //Increase the value of the variable.
    //Only variable with number value
    //prefix and postfix are operators for incrementation


    //pre-incrementation or prefix = ++a
    //increase the value with 1 and next we print it
    console.log(++a) //we increase from 1 to 2
    console.log(a)  //print again new value 2
    //post-incrementation or postfix = a++
    //return the old value and increase the value with 1
    console.log(a++) //old value 2
    console.log(a) //increment value 3

    console.log("Decrementation")
    //this is decrementation
    //Decrease the value of the variable
    //Only variable with NUMBER value
    //prefix and postfix are operators for decrementation
    //pre-decrementation or prefix = --a
    //decrease the with 1 and next we print it
    console.log(--a) //from 3 we go down to 2
    console.log(a) //print again 2
    //post-decrementation or postfix = a--
    //decrease the value with 1 but first we print the old value
    console.log(a--) //old value 2
    console.log(a) //new value 1


}

solve()