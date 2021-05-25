// const nome = 'Hugo';
// const element = <h1>Hello, {nome}</h1>

// Exemplo
function nomeCompleto (nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

const element = <h1>Hello, {nomeCompleto("Jorge", "Maravilha")}</h1>;

function helloWorld (nome, sobrenome) {
  return <h1>Hello, {`${nome} ${sobrenome}`}</h1>;
}

const container = <div>{helloWorld('Hugo', 'Somers')}</div>;

// Exemplo Classes
const nome = 'Jorge Maravilha';
const classe = 'hello-class';
const element = <h1 className={classe}>Hello, {nome}</h1>;

// Para fixar

const textJSX = 'Hello, JSX';
const h1Tag = <h1>{textJSX}</h1>;
