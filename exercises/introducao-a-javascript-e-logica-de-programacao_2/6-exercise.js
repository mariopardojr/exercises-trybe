let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;

for(let index = 0; index < numbers.length; index++){
    if(numbers[index] % 2 != 0){
        impar++;
    }
}

console.log(`A quantidade de ímpares é: ${impar}.`)