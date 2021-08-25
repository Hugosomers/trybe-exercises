-- FIXAÇÃO

-- -------------------------------------------------------------------------------
-- Manipulação de strings

-- 1 Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.
SELECT UCASE('trybe');
-- 2 Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?'.
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');
-- 3 Utilizando uma query , encontre quantos caracteres temos em 'Uma frase qualquer'.
SELECT LENGTH('Uma frase qualquer');
-- 4 Extraia e retorne a palavra "JavaScript" da frase 'A linguagem JavaScript está entre as mais usadas' .
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas',13,10);
-- 5 Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa.
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');

-- -------------------------------------------------------------------------------
-- Condicionais

-- 1 - Usando o IF na tabela sakila.film, exiba o id do filme, o título e uma coluna extra chamada 'conheço o filme?', em que deve-se avaliar se o nome do filme é ' ACE GOLDFINGER '. 
-- Caso seja, exiba "Já assisti a esse filme". Caso contrário, exiba "Não conheço o filme". Não esqueça de usar um alias para renomear a coluna da condicional.
SELECT film_id, title, IF(title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme') AS 'Conheço o filme?'
FROM sakila.film;

-- 2 - Usando o CASE na tabela sakila.film, exiba o título, a classificação indicativa ( rating ) e uma coluna extra que vamos chamar de 'público-alvo', 
-- em que classificaremos o filme de acordo com as seguintes siglas: 
-- G: "Livre para todos";
-- PG: "Não recomendado para menores de 10 anos";
-- PG-13: "Não recomendado para menores de 13 anos";
-- R: "Não recomendado para menores de 17 anos";
-- Se não cair em nenhuma das classificações anteriores: "Proibido para menores de idade".
SELECT title, rating, 
CASE
	WHEN rating = 'G' THEN 'Livre para todos'
    WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
    WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
    WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
ELSE 'Proibido para menores de idade'
END AS 'público-alvo' 
FROM sakila.film;

-- -------------------------------------------------------------------------------
-- Funções matemáticas do MySQL

-- 1 - Monte uma query usando o MOD juntamente com o IF para descobrir se o valor 15 é par ou ímpar. Chame essa coluna de 'Par ou Ímpar' , onde ela pode dizer 'Par' ou 'Ímpar'.
SELECT IF((84 MOD 23) / 2 = 0, 'Par', 'Ímpar');
-- 2 - Monte uma query que gere um valor entre 15 e 20 .
SELECT ROUND(15 + (RAND() * 5));
-- 3 - Monte uma query que exiba o valor arredondado de 15.7515971 com uma precisão de 5 casas decimais.
SELECT ROUND(15.7515971, 5);
-- 4 - Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o valor aproximado para baixo dessa média?
SELECT FLOOR(39.494);
-- 5 - Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o valor aproximado para cima dessa média?
SELECT CEIL(85.234);
 
-- -------------------------------------------------------------------------------
-- Trabalhando com datas

-- 1 - Monte uma query que exiba a diferença de dias entre '2030-01-20' e hoje.
SELECT DATEDIFF('2030-01-20', CURRENT_DATE());
-- 2 - Monte uma query exiba a diferença de horas entre '10:25:45' e '11:00:00'.
SELECT TIMEDIFF('10:25:45', '11:00:00');

-- -------------------------------------------------------------------------------
-- Funções de agregação

-- 1 - A média de duração dos filmes e dê o nome da coluna de 'Média de Duração';
SELECT AVG(length) AS 'Média de Duração' FROM sakila.film;
-- 2 - A duração mínima dos filmes como 'Duração Mínima';
SELECT MIN(length) AS 'Duração Mínima' FROM sakila.film;
-- 3 - A duração máxima dos filmes como 'Duração Máxima';
SELECT MAX(length) AS 'Duração Máxima' FROM sakila.film;
-- 4 - A soma de todas as durações como 'Tempo de Exibição Total';
SELECT SUM(length) AS 'Tempo de Exibição Total' FROM sakila.film;
-- 5 - E finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'.
SELECT COUNT(*) AS 'Filmes Registrados' FROM sakila.film;

-- -------------------------------------------------------------------------------
-- GROUP BY
-- 1 - Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos e a quantidade que estão inativos.
SELECT active, COUNT(active)
FROM sakila.customer
GROUP BY active;

-- 2 - Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e inativos por loja.
-- Os resultados devem conter o ID da loja , o status dos clientes (ativos ou inativos) e a quantidade de clientes por status.
SELECT store_id, active, COUNT(active)
FROM sakila.customer
GROUP BY active;

-- 3 -  Monte uma query que exiba a média de duração de locação por classificação indicativa ( rating ) dos filmes cadastrados na tabela sakila.film.
-- Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.
SELECT AVG(rental_duration) AS Media, rating
FROM sakila.film
GROUP BY rating
ORDER BY rental_duration;

-- 4 - Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços registrados nele. 
-- Os resultados devem ser ordenados da maior quantidade para a menor.
SELECT district, COUNT(district) AS Quantidade
FROM sakila.address
GROUP BY district
ORDER BY Quantidade DESC;

-- 5 - Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50. 
-- Além disso, dê um alias (apelido) à coluna gerada por AVG(length), de forma que deixe a query mais legível. 
-- Finalize ordenando os resultados de forma decrescente.
SELECT rating, AVG(length) AS Média
FROM sakila.film
GROUP BY rating
HAVING Média BETWEEN 115 AND 121.50
ORDER BY Média DESC;

-- 6 - Usando a query a seguir, exiba apenas os valores de custo de substituição que estão acima de $3950.50. 
-- Dê um alias que faça sentido para SUM(replacement_cost), de forma que deixe a query mais legível. 
-- Finalize ordenando os resultados de forma crescente.
SELECT rating, SUM(replacement_cost) AS Custo
FROM sakila.film
GROUP by rating
HAVING Custo > 3950.50
ORDER BY Custo;