USE sakila;
SELECT * from city;
SELECT * from country;
-- Exercício 4 : Analise a tabela city e encontre a tabela à qual a coluna country_id faz referência.
-- A coluna country_id faz referência à tabela country.

-- Exercício 5 : Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela city faz com a tabela country ?
-- Muitas para um -> X-1

-- Exercício 6 : Qual tipo de relacionamento a tabela country faz com a tabela city ?
-- Uma para muitas -> 1-X

SELECT * FROM sakila.store;
SELECT * FROM sakila.staff;
-- Exercício 7 : Abra tabela por tabela do banco sakila e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1.
-- store para staff (Uma store pode conter várias staffs)