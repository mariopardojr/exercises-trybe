const { TestScheduler } = require('jest');

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }

      return reject({ error: 'User with ' + id + ' not found.' });
  });
}


const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

describe('Quando o ID inserido existe.', () => {
  test('A função retorna "Mark"', () => {
    expect.assertions(1);
    return getUserName(4).then((name) => expect(name).toEqual('Mark'));
  });
})

describe('Quando o ID inserido não existe.', () => {
  test('A função deve retornar uma mensagem de erro.', () => {
    return getUserName(8).catch((error) => {
      expect(error).toEqual({ error: 'User with 8 not found.' });
    });
  });
})

