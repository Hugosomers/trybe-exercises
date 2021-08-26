-- INNER JOIN
SELECT t1.coluna, t2.coluna
FROM tabela1 AS t1
INNER JOIN tabela2 AS t2
ON t1.coluna_em_comum = t2.coluna_em_comum;

SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor a
INNER JOIN sakila.film_actor f
ON a.actor_id = f.actor_id;

-- -----------------------------------------------------------------------------
-- LEFT JOIN
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
LEFT JOIN sakila.actor AS a
ON c.customer_id = a.actor_id
ORDER BY c.last_name;

-- -----------------------------------------------------------------------------
-- RIGHT JOIN

SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
RIGHT JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

-- -----------------------------------------------------------------------------
-- SELF JOIN

SELECT t1.title, t1.replacement_cost, t2.title, t2.replacement_cost
FROM sakila.film AS t1, sakila.film AS t2
WHERE t1.length = t2.length;

-- -----------------------------------------------------------------------------
-- UNION e UNION ALL
(SELECT first_name, '-' AS customer_id FROM sakila.actor)
UNION ALL
(SELECT first_name, customer_id FROM sakila.customer)
ORDER BY first_name;

-- -----------------------------------------------------------------------------
-- SUBQUERY

-- Usando uma SUBQUERY como fonte de dados para o FROM .
SELECT f.title, f.rating
FROM (
    SELECT *
    FROM sakila.film
    WHERE rating = 'R'
) AS f;

-- Preenchendo uma coluna de um SELECT por meio de uma SUBQUERY.
SELECT
    address,
    district,
    (
        SELECT city
        FROM sakila.city
        WHERE city.city_id = sakila.address.city_id
    ) AS city
FROM sakila.address;

-- Filtrando resultados com WHERE usando como base os dados retornados de uma SUBQUERY.
SELECT address, district
FROM sakila.address
WHERE city_id in (
    SELECT city_id
    FROM sakila.city
    WHERE city in ('Sasebo', 'San Bernardino', 'Athenai', 'Myingyan')
);

-- Usando uma tabela externa, de fora da SUBQUERY , dentro dela.
SELECT
    first_name,
    (
        SELECT address
        FROM sakila.address
        WHERE address.address_id = tabela_externa.address_id
    ) AS address
FROM sakila.customer AS tabela_externa;

-- -----------------------------------------------------------------------------
-- SUBQUERY X JOIN

-- Subquery
SELECT
    first_name,
    (
        SELECT address
        FROM sakila.address
        WHERE address.address_id = tabela_externa.address_id
    ) AS address
FROM sakila.customer AS tabela_externa;

-- Join
SELECT c.first_name, ad.address
FROM sakila.customer c
INNER JOIN sakila.address ad ON c.address_id = ad.address_id;

-- -----------------------------------------------------------------------------
-- EXISTS
SELECT * From hotel.customers AS c
WHERE EXISTS (SELECT * FROM hotel.reservations WHERE c.CustomerID = reservations.CustomerID);

SELECT `Name` FROM praticando.manufacturers AS m
WHERE NOT EXISTS (
	SELECT * FROM praticando.products
	WHERE Manufacturer = m.Code
);