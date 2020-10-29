function maiorIndex(array){
    let maiorNum = array[0];
    let maiorIndice;
    for(index in array){
        if(array[index] > maiorNum){
            maiorNum = array[index];
            maiorIndice = index;
        }
    }
    return maiorIndice;
}

console.log(maiorIndex([2, 4, 6, 7, 10, 0, -3]))