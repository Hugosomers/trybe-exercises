-- Count
-- Quantas senhas temos cadastradas nessa tabela? 1
SELECT COUNT(password) FROM sakila.staff;

-- Quantas pessoas temos no total trabalhando para nossa empresa? 2
SELECT COUNT(first_name) FROM sakila.staff;

-- Quantos emails temos cadastrados nessa tabela? 
SELECT COUNT(DISTINCT email) FROM sakila.staff;
