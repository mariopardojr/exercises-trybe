const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

describe('Uppercase', () => {
  test('Verifica se a callback retorna MARIO', (done) => {
    const callback = (data) => {
      expect(data).toBe('MARIO');
      done();
    };
    uppercase('Mario', callback);
  })
})

