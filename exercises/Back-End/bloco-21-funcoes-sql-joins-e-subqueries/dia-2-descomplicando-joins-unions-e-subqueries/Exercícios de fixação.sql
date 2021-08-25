-- Exercícios de fixação
-- ---------------------------------------------------
-- INNER JOIN
-- 1- Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor.
SELECT a.actor_id, a.first_name, f.film_id FROM sakila.actor a
INNER JOIN sakila.film_actor f
ON a.actor_id = f.actor_id;

-- 2- Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
SELECT s.first_name, s.last_name, a.address FROM sakila.staff s
INNER JOIN sakila.address a
ON s.address_id = a.address_id;

-- 3- Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora.
-- Essas informações podem ser encontradas nas tabelas customer e address.
SELECT c.customer_id, c.first_name, c.email, a.address_id, a.address FROM sakila.customer c
INNER JOIN sakila.address a
ON c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;

-- 4- Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. 
-- As informações podem ser encontradas nas tabelas address e customer.
SELECT c.first_name, c.email, c.address_id, a.address, a.district
FROM sakila.customer c
INNER JOIN sakila.address a
ON c.address_id = a.address_id
WHERE c.first_name LIKE '%rene%' AND a.district = 'California';

-- 5- Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. 
-- Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer.
SELECT c.first_name, COUNT(a.address_id)
FROM sakila.customer c
INNER JOIN sakila.address a
ON c.address_id = a.address_id
WHERE c.active = 1
GROUP BY c.first_name
ORDER BY c.first_name DESC;

-- 6- Monte uma query que exiba o nome, sobrenome e a média de valor ( amount ) paga aos funcionários no ano de 2006. Use as tabelas payment e staff. 
-- Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT s.first_name, s.last_name, AVG(p.amount)
FROM sakila.staff s
INNER JOIN sakila.payment p
ON s.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = 2006
GROUP BY s.first_name, s.last_name;
-- 7- Monte uma query que exiba o id do ator, nome, id do filme e título do filme, usando as tabelas actor, film_actor e film.
-- Dica: você precisará fazer mais de um JOIN na mesma query.
SELECT a.actor_id, a.first_name, fa.film_id, f.title
FROM sakila.actor a
INNER JOIN sakila.film_actor fa
ON a.actor_id = fa.actor_id
INNER JOIN sakila.film f
ON f.film_id = fa.film_id;

-- ---------------------------------------------------
-- SELF JOIN

-- 1- Queremos saber os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição.
SELECT f.film_id, f.replacement_cost, f2.film_id, f2.replacement_cost
FROM sakila.film AS f, sakila.film AS f2
WHERE f.replacement_cost = f2.replacement_cost;
-- 2- Exiba o título e a duração de empréstimo dos filmes que possuem a mesma duração. Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.
SELECT f.title, f.rental_duration, f2.title, f2.rental_duration
FROM sakila.film AS f, sakila.film AS f2
WHERE (f.length = f2.length) AND (f.rental_duration BETWEEN 2 AND 4) AND (f2.rental_duration BETWEEN 2 AND 4);

-- ---------------------------------------------------
-- UNION e UNION ALL

-- 1- Todos os funcionários foram promovidos a atores. Monte uma query que exiba a união da tabela staff com a tabela actor, exibindo apenas o nome e o sobrenome. 
-- Seu resultado não deve excluir nenhum funcionário ao unir as tabelas.
SELECT first_name, last_name FROM sakila.staff
UNION ALL
SELECT first_name, last_name FROM sakila.actor;

-- 2- Monte uma query que una os resultados das tabelas customer e actor, exibindo os nomes que contêm a palavra "tracy" na tabela customer e os que contêm "je" na tabela actor. 
-- Exiba apenas os resultados únicos.
SELECT first_name FROM sakila.customer WHERE first_name LIKE '%tracy%'
UNION
SELECT first_name FROM sakila.actor WHERE first_name LIKE '%je%';

-- 3- Monte uma query que exiba a união dos cinco últimos nomes da tabela actor, o primeiro nome da tabela staff e cinco nomes a partir da 15ª posição da tabela customer. 
-- Não permita que dados repetidos sejam exibidos. Ordene os resultados em ordem alfabética.
(SELECT first_name FROM sakila.actor ORDER BY first_name DESC LIMIT 5)
UNION
(SELECT first_name FROM sakila.staff LIMIT 1)
UNION
(SELECT first_name FROM sakila.customer LIMIT 5 OFFSET 15);

-- Você quer exibir uma lista paginada com os nomes e sobrenomes de todos os clientes e atores do banco de dados, em ordem alfabética. 
-- Considere que a paginação está sendo feita de 15 em 15 resultados e que você está na 4ª página. Monte uma query que simule esse cenário.
(SELECT first_name, last_name FROM sakila.customer LIMIT 15 OFFSET 60)
UNION ALL
(SELECT first_name, last_name FROM sakila.actor LIMIT 15 OFFSET 60)
ORDER BY first_name
LIMIT 15;

-- ---------------------------------------------------
-- EXISTS

-- 1- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram emprestados.
SELECT id, title FROM hotel.books AS b
WHERE NOT EXISTS (SELECT * FROM hotel.books_lent AS bl
					WHERE b.id = bl.book_id);
-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título.
SELECT id, title FROM hotel.books AS b
WHERE EXISTS (SELECT * FROM hotel.books_lent AS bl
					WHERE b.id = bl.book_id)
AND title LIKE '%lost%';
-- Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram um carro.
SELECT `Name` FROM hotel.customers AS c
WHERE NOT EXISTS (SELECT * FROM hotel.carsales AS cs
					WHERE c.CustomerID = cs.CustomerID);
-- Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customers e carsales , exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.
SELECT cust.`Name`, car.`Name` 
FROM hotel.customers AS cust
INNER JOIN hotel.cars AS car
WHERE EXISTS (SELECT * FROM hotel.carsales AS crsal
				WHERE crsal.CustomerID = cust.CustomerId AND car.Id = crsal.CarID);


