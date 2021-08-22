-- Insira um novo funcionário na tabela sakila.staff.
INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES ('Hugo', 'Somers', 3, 'hugo@gmail.com', 2, 1, 'Hugos', '123456');
SELECT * FROM sakila.staff;

-- Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.
INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES ('Karine', 'Ladeira', 2, 'krina@gmail.com', 1, 1, 'Krine', '123456'),
('Guto', 'Etz', 2, 'guto@gmail.com', 2, 1, 'Gtoetz', '123456');

-- Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor.
INSERT INTO sakila.actor (first_name, last_name) 
SELECT first_name, last_name FROM sakila.customer
LIMIT 5;

SELECT * FROM sakila.actor;
SELECT * FROM sakila.customer;

-- Cadastre três categorias de uma vez só na tabela sakila.category.
INSERT INTO sakila.category (name)
VALUES ('Games'),
('LOL'),
('FPS');
SELECT * FROM sakila.category;

-- Cadastre uma nova loja na tabela sakila.store.
SELECT * FROM sakila.store;
INSERT INTO sakila.store (manager_staff_id, address_id) VALUES
(5, 3);