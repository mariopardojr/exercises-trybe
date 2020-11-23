const fatorial = (num) => {
  let produto = 1;
  for (let index = num; index >= 1; index -= 1) {
    produto *= index;
  }
  return produto;
};
console.log(fatorial(4));

