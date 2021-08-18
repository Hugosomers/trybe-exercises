-- Para os exercícios a seguir, vamos usar a tabela sakila.film --

-- Escreva uma query que exiba todos os filmes cadastrados no banco de dados.
SELECT * FROM sakila.film;

-- Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação.
SELECT title, release_year, rating FROM sakila.film;

-- Quantos filmes temos cadastrados? 1000
SELECT COUNT(DISTINCT title) FROM sakila.film;

-- Para os exercícios a seguir, vamos usar a tabela sakila.actor --

-- Escreva uma query que exiba apenas os sobrenomes únicos cadastrados.
-- Quantos sobrenomes únicos temos na tabela? 121
SELECT DISTINCT last_name FROM sakila.actor;
SELECT COUNT(DISTINCT last_name) FROM sakila.actor;

-- Ordene os valores na tabela em ordem crescente de sobrenomes e em ordem decrescente de nome.
SELECT first_name, last_name FROM sakila.actor
ORDER BY first_name DESC, last_name ASC;

-- Vá até a tabela language do sakila e crie uma pesquisa que mostre os 5 idiomas cadastrados , mas não mostre o idioma english.
SELECT name FROM sakila.language
WHERE name != 'English';

-- Crie uma query para encontrar os 20 primeiros filmes , incluindo o título , o ano de lançamento , a duração , a classificação indicativa e o custo de substituição
-- Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.
SELECT title, release_year, length, rental_rate, replacement_cost FROM sakila.film 
ORDER BY length DESC, replacement_cost 
LIMIT 20;



