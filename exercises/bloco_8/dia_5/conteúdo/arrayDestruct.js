// Exemplo 1 
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

// ----------------------------------------------------------- //

// Exercício de fixação 1 
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

const [a, b] = saudacoes;

b(a);

// saudacoes[1](saudacoes[0]); // Olá
// Produza o mesmo resultado acima, porém utilizando array destructuring

// ----------------------------------------------------------- //

// Exercício 2
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal];
// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

console.log(comida, animal, bebida); // arroz gato água

// ----------------------------------------------------------- //

// Exercício 3
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[, , , ...numerosPares] = numerosPares;

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
console.log(numerosPares); // [6, 8, 10, 12]