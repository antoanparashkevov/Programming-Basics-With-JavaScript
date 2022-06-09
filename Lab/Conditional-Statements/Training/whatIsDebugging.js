//through debugging we pass step by step through our code and so it helps us to find the wrongs.
//On the left side where the number of raws is written, we can click there to display red dots.
//These red dots are breakpoints. This is the spot where we want to operate manually our function.
//With control+option+D we start the program with debugging mode.
//It is going to display two drop-down menus ( Local and Global )
//In the local drop-down menu we have the variable and input drop-down menu where we can find
//our input data and the length of our array( if the input data is array )
//With option+command+R we manage ahead from breakpoint upwards and if we hover the variable in the code,
//We can see the value.
//We can debug through the browser or just type console.log on every moment that we want
//to know the exact value.
//With F7 we jump into one breakpoint to other.
//Press command+F2 to finish debugging.

function whatIsDebugging(input) {
    let number1 = Number(input[0])
    let number2 = Number(input[1])

    if (number1 > number2) {
        console.log(number1)
    } else {
        console.log(number2)
    }
}
whatIsDebugging(["5", "3"])