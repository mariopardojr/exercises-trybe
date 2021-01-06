const { TestScheduler } = require('jest');
const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

describe('Repositórios GitHub', () => {
  test('Verifica se a requisição não contêm tais repositórios.', async () => {
    const reposNames = await getRepos('https://api.github.com/users/tryber/repos');
    expect(reposNames.includes('sd-01-week4-5-project-todo-list')).toBe(false);
    expect(reposNames.includes('sd-01-week4-5-project-meme-generator')).toBe(false);
  });
})