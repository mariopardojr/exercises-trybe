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


describe('Usando Async/Await', () => {
  test('O retoro deve ser uma mensagem de erro.', async () => {
    try {
      await getUserName(8);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 8 not found.'})
    }
  })
})