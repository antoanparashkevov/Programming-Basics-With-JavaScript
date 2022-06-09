function password(input) {
    let name = input[0]
    let password = input[1];
    let index = 2;
    let attempt = input[index];//2
    index++//3

    while(password!==attempt){
        attempt = input[index]//3
        index++;
    }
    if(password===attempt){ //this if statement is unnecessary because if we did not enter into while loop the password is like attempts
        console.log(`Welcome ${name}!`)
    }

}

password(["Nakov", "1234", "Pass", "1324", "1233"])