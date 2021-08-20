-- INSERT
SELECT * FROM sakila.staff;
INSERT INTO sakila.staff (staff_id, first_name, last_name, address_id, email, store_id, active, username, password, last_update) VALUES
('valor_1','valor_2'),
('valor_3','valor_4'),
('valor_5','valor_6');
-- -----------------------------------------------------------------------

-- INSERT IGNORE
INSERT IGNORE INTO pessoas (id, name) VALUES
(4,'Gloria'), -- Sem o IGNORE, essa linha geraria um erro e o INSERT não continuaria.
(5,'Amanda');
-- Pesquisando agora, você verá que a informação duplicada não foi inserida.
-- Porém os dados corretos foram inseridos com sucesso.

-- -----------------------------------------------------------------------

-- INSERT com tabela que possui auto_increment no actor_id
INSERT INTO sakila.actor (first_name, last_name)
VALUES('Marcelo','Santos');

-- -----------------------------------------------------------------------

-- INSERT SELECT
INSERT INTO tabelaA (coluna1, coluna2)
    SELECT tabelaB.coluna1, tabelaB.coluna2
    FROM tabelaB
    WHERE tabelaB.nome_da_coluna <> 'algumValor'
    ORDER BY tabelaB.coluna_de_ordenacao;
    
INSERT INTO sakila.actor (first_name, last_name)
    SELECT first_name, last_name FROM sakila.staff;

-- -----------------------------------------------------------------------
-- UPDATE
UPDATE nome_da_tabela
SET propriedade_a_ser_alterada = 'novo valor para coluna'
WHERE alguma_condicao; -- importantíssimo aplicar o WHERE para não alterar a tabela inteira!

UPDATE sakila.staff
SET first_name = 'Rannveig'
WHERE first_name = 'Ravein';

-- -----------------------------------------------------------------------
-- UPDATE EM MAIS DE UMA COLUNA
UPDATE sakila.staff
SET first_name = 'Rannveig', last_name = 'Jordan'
WHERE staff_id = 4;

-- -----------------------------------------------------------------------

-- UPDATE EM MASSA
-- Opção 1 - Incluindo a lista de condições fixas
UPDATE sakila.actor
SET first_name = 'JOE'
WHERE actor_id IN (1,2,3);

-- Opção 2 - Especificando como cada entrada será alterada individualmente
UPDATE sakila.actor
SET first_name = (
CASE actor_id WHEN 1 THEN 'JOE' -- se actor_id = 1, alterar first_name para 'JOE'
              WHEN 2 THEN 'DAVIS' -- se actor_id = 2, alterar first_name para 'DAVIS'
              WHEN 3 THEN 'CAROLINE' -- se actor_id = 3, alterar first_name para 'CAROLINE'
          ELSE first_name -- em todos os outros casos, mantém-se o first_name
END);

-- -----------------------------------------------------------------------

-- UPDATE SEQUENCIAL
UPDATE nome_da_tabela
SET coluna1 = valor1, coluna2 = valor2
[WHERE condições]
[ORDER BY expressao [ ASC | DESC ]]
[LIMIT quantidade_resultados];

-- Exemplo:
UPDATE sakila.staff
SET password = 'FavorResetarSuaSenha123'
WHERE active = 1
ORDER BY last_update
LIMIT 2;

-- -----------------------------------------------------------------------

-- DELETE
SET SQL_SAFE_UPDATES = 0;

DELETE FROM banco_de_dados.tabela
WHERE coluna = 'valor';
-- O WHERE é opcional. Porém, sem ele, todas as linhas da tabela seriam excluídas.

DELETE FROM sakila.film_text
WHERE title = 'ACADEMY DINOSAUR';

-- Rejeita o comando DELETE.
-- ON DELETE NO ACTION;

-- Rejeita o comando DELETE.
-- ON DELETE RESTRICT;

-- Permite a exclusão dos registros da tabela pai, e seta para NULL os registros da tabela filho.
-- ON DELETE SET NULL;

-- Exclui a informação da tabela pai e registros relacionados.
-- ON DELETE CASCADE;


-- Para conseguir excluir este ator em actors , precisamos primeiro excluir todas as referências a ele na tabela sakila.film_actor
DELETE FROM sakila.film_actor
WHERE actor_id = 7; -- actor_id = 7 é o Id de GRACE

DELETE FROM sakila.actor
WHERE first_name = 'GRACE';

-- -----------------------------------------------------------------------