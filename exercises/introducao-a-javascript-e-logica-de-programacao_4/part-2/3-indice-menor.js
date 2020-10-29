function menorIndex(array){
    let menorNum = array[0];
    let menorIndice;
    for(index in array){
        if(array[index] < menorNum){
            menorNum = array[index];
            menorIndice = index;
        }
    }
    return menorIndice;
}

console.log(menorIndex([2, 3, 6, 7, 10, 1]))