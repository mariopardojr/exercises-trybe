function maiorQuantidadeCaracter(array){
    let maiorNome = array[0];
    for(index in array){
        if(array[index].length > maiorNome.length){
            maiorNome = array[index]
        }
    }
    return maiorNome;
}

console.log(maiorQuantidadeCaracter(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));