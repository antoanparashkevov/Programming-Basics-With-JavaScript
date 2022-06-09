function sequence(input) {
//we know the exact indexes of the array
    let n = Number(input[0]);
    let k = 1;

    while(k <= n){
        console.log(k);
        k=k*2+1;
    }
}

sequence(["8"])