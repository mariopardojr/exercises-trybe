const fatorial = (num) => {
  let produto = 1;
  for (let index = num; index >= 1; index -= 1) {
    produto *= index;
  }
  return produto;
};
console.log(fatorial(4));

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

const maiorPalavra = frase => {
  let fraseArray = frase.split(' ');
  let maior = 0
  let resultado = '';
  for (palavra of fraseArray) {
    if (palavra.lenght > maior) {
      maior = palavra.lenght
      resultado = palavra;
    }
  }
  return palavra;
}
console.log(maiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu"))

