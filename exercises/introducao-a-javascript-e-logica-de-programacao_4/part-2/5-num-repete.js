function numeroRepete(array){
    let count = 0;
    let indexMaiorCount;
    let maiorCount = 0;
    for(index1 in array){
        for(index2 in array){
            if(array[index2] === array[index1]){
                count++;
            }       
        }
        if(count > maiorCount){
            maiorCount = count
            indexMaiorCount = index1;
        }
        count = 0;
    }
    return array[indexMaiorCount];
}

console.log(numeroRepete([2, 0, 3, 0, 0, 5, 0]))