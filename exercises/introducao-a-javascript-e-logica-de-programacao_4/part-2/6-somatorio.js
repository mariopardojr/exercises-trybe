function somatorio(num){
    let sum = 0;
    for(let n = 1; n <= num; n++){
        sum += n;
    }
    return sum;
}

console.log(somatorio(3));