const url = 'https://api.github.com/orgs/tryber/repos';
const { getRepos } = require('./exercise4');

describe ('Verificação do fetch da API do GH', () => {
  it ('Should return one item', () => {
    expect.assertions(1);
    return expect(getRepos('https://api.github.com/orgs/tryber/repos')).resolves.toContain('sd-01-week4-5-project-todo-list');
  });

  it ('Should return one item', () => {
    expect.assertions(1);
    return expect(getRepos('https://api.github.com/orgs/tryber/repos')).resolves.toContain('sd-01-week4-5-project-meme-generator');
  });
});