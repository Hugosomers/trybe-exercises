-- Fixação

-- WHERE  e Ordem de operadores
SELECT * FROM sakila.payment
WHERE amount = 0.99 OR amount = 2.99 AND staff_id = 2;
-- <>
SELECT * FROM sakila.payment
WHERE (amount = 0.99 OR amount = 2.99) AND staff_id = 2;
-- ----------------------------------------------------------------------------------------------------
-- Fixação de operadores booleanos e relacionais

-- 1 - Precisamos identificar os dados do cliente com o e-mail LEONARD.SCHOFIELD@sakilacustomer.org.
SELECT * FROM sakila.customer;

SELECT * FROM sakila.customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
-- 2 - Precisamos de um relatório dos nomes dos clientes, em ordem alfabética, 
-- que não estão mais ativos no nosso sistema e pertencem à loja com o id = 2, e não inclua o cliente KENNETH no resultado.
SELECT CONCAT(first_name, ' ', last_name) as client_name FROM sakila.customer
WHERE active = 0 AND store_id = 2 AND first_name <> 'KENNETH'
ORDER BY first_name;
-- 3 - O setor financeiro quer saber título, descrição, ano de lançamento e valor do custo de substituição ( replacement_cost ),
-- dos 100 filmes com o maior custo de substituição, do valor mais alto ao mais baixo, 
-- entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares. 
-- Em caso de empate, ordene em ordem alfabética pelo título.
SELECT * FROM sakila.film;

SELECT title, description, release_year, replacement_cost FROM sakila.film
WHERE rating <> 'NC-17' AND replacement_cost >= 18 
ORDER BY replacement_cost DESC, title
LIMIT 100;
-- 4 - Quantos clientes estão ativos e na loja 1 ?
SELECT * FROM sakila.customer;

SELECT COUNT(*) FROM sakila.customer
WHERE active IS TRUE;

SELECT COUNT(*) FROM sakila.customer
WHERE active IS TRUE 
AND store_id = 1;
-- 5 - Mostre todos os detalhes dos clientes que não estão ativos na loja 1 .
SELECT * FROM sakila.customer
WHERE active IS FALSE
AND store_id = 1;
-- Precisamos descobrir quais são os 50 filmes feitos apenas para adultos com a menor taxa de aluguel, 
-- para que possamos fazer uma divulgação melhor desses filmes. Em caso de empate, ordene em ordem alfabética pelo título.
SELECT * FROM sakila.film;

SELECT * FROM sakila.film
WHERE rating = 'NC-17'
ORDER BY rental_rate, title
LIMIT 50;
-- ----------------------------------------------------------------------------------------------------
-- LIKE

-- Mostre todos os detalhes dos filmes que contêm a palavra ace no nome.
SELECT * FROM sakila.film
WHERE title LIKE '%ace%';
-- Mostre todos os detalhes dos filmes cujas descrições finalizam com china .
SELECT * FROM sakila.film
WHERE description LIKE '%china';
-- Mostre todos os detalhes dos dois filmes cujas descrições contêm a palavra girl e o título finaliza com a palavra lord .
SELECT * FROM sakila.film
WHERE description LIKE '%girl%' 
AND title LIKE '%lord';
-- Mostre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra gon.
SELECT * FROM sakila.film
WHERE title LIKE '___gon%';
-- Mostre o único caso em que, a partir do 4° caractere no título do filme, tem-se a palavra gon e a descrição contém a palavra Documentary.
SELECT * FROM sakila.film
WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';
-- Mostre os dois filmes cujos títulos ou finalizam com academy ou iniciam com mosquito.
SELECT * FROM sakila.film
WHERE title LIKE '%academy' OR title LIKE 'mosquito%';
-- Mostre os seis filmes que contêm as palavras monkey e sumo em suas descrições
SELECT * FROM sakila.film
WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';

-- ----------------------------------------------------------------------------------------------------
-- IN

SELECT * FROM sakila.actor
WHERE first_name IN ('PENELOPE','NICK','ED','JENNIFER');

SELECT * FROM sakila.customer
WHERE customer_id in (1, 2, 3, 4, 5);
-- Como você faria, então, para encontrar, usando o IN , todos os detalhes sobre o aluguel dos clientes com os seguintes ids: 269, 239, 126, 399, 142?
SELECT * FROM sakila.rental
WHERE customer_id IN (269, 239, 126, 399, 142);
-- Como encontraria todas as informações sobre os endereços que estão registrados nos distritos de QLD, Nagasaki, California, Attika, Mandalay, Nantou e Texas?
SELECT * FROM sakila.address
WHERE district IN ('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas');
-- ----------------------------------------------------------------------------------------------------
-- BETWEEN

SELECT title, length FROM sakila.film
WHERE length BETWEEN 50 AND 120;
-- Usando o BETWEEN com strings
SELECT * FROM sakila.language
WHERE name BETWEEN 'Italian' AND 'Mandarin'
ORDER BY name;
-- Usando o BETWEEN com datas
SELECT rental_id, rental_date FROM sakila.rental
WHERE rental_date
BETWEEN '2005-05-27' AND '2005-07-17';

-- 1 - Mostre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes: hicks, crawford, henry, boyd, mason, morales e kennedy , ordenados por nome em ordem alfabética.
SELECT first_name, last_name, email FROM sakila.customer
WHERE last_name IN('hicks','crawford','henry', 'boyd','mason','morales','kennedy')
ORDER BY first_name;
-- 2 - Mostre o e-mail dos clientes com os address_id 172, 173, 174, 175 e 176 , ordenados em ordem alfabética.
SELECT email FROM sakila.customer
WHERE address_id IN(172,173, 174, 175,176)
ORDER BY email;
-- 3 - Descubra quantos pagamentos foram feitos entre 01/05/2005 e 01/08/2005 . Lembre-se de que, no banco de dados, as datas estão armazenadas no formato ano/mês/dia , diferente do formato brasileiro, que é dia/mês/ano.
SELECT COUNT(payment_id) FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-02' AND '2005-08-01';
-- 4 - Mostre o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo de 3 a 6 . Os resultados devem ser classificados em filmes com maior duração de empréstimo primeiro.
-- Em caso de empate, ordene em ordem alfabética pelo título.
SELECT title, release_year, rental_duration FROM sakila.film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title;
-- 5 - Monte um relatório que exiba o título e classificação dos 500 primeiros filmes direcionados para as classificações indicativas G, PG e PG-13 . Os resultados devem estar ordenados por título.
SELECT title, rating FROM sakila.film
WHERE rating IN('G', 'PG', 'PG-13')
ORDER BY title
LIMIT 500;
-- ----------------------------------------------------------------------------------------------------
-- Date
SELECT curtime();

-- Encontra todos os pagamentos deste dia, ignorando horas, minutos e segundos
SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-31';
-- Encontra todos pagamentos deste dia, ignorando horas, minutos e segundos
SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-07-31%';
-- Encontra um pagamento com dia e hora exatos
SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-08-20 00:30:52';
-- Encontra pagamentos especificando um valor mínimo e um valor máximo para a data
SELECT *
FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-26 00:00:00' AND '2005-05-27 23:59:59';
-- Apenas uma parte de uma data, como o ano ou as horas.
SELECT DATE(payment_date) FROM sakila.payment; -- YYYY-MM-DD
SELECT YEAR(payment_date) FROM sakila.payment; -- Ano
SELECT MONTH(payment_date) FROM sakila.payment; -- Mês
SELECT DAY(payment_date) FROM sakila.payment; -- Dia
SELECT HOUR(payment_date) FROM sakila.payment; -- Hora
SELECT MINUTE(payment_date) FROM sakila.payment; -- Minuto
SELECT SECOND(payment_date) FROM sakila.payment; -- Segundo