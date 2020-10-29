function verificaPalindrome(palavra){
    let novaPalavra = "";
    let palindromo;
    for(let index = palavra.length - 1; index >= 0; index--){
        novaPalavra += palavra[index];
    }
    if(novaPalavra.toLowerCase() === palavra.toLowerCase()){
        palindromo = true;
    }else{
        palindromo = false;
    }
    return palindromo;
}

console.log(verificaPalindrome("reter"));
