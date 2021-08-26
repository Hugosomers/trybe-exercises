-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.
SELECT m.title, bx.domestic_sales, bx.international_sales
FROM pixar.movies m
INNER JOIN pixar.boxoffice bx
ON m.id = bx.movie_id;
-- Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais do que vendas nacionais.
SELECT m.title, bx.domestic_sales, bx.international_sales
FROM pixar.movies m
INNER JOIN pixar.boxoffice bx
ON m.id = bx.movie_id AND bx.international_sales > bx.domestic_sales;
-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
SELECT m.title, bx.rating
FROM pixar.movies m
INNER JOIN pixar.boxoffice bx
ON m.id = bx.movie_id
ORDER BY bx.rating DESC;
-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas.
-- Retorne os nomes dos cinemas em ordem alfabética.
SELECT c.*, m.*
FROM pixar.theater c
LEFT JOIN pixar.movies m
ON c.id = m.theater_id
ORDER BY c.name;
-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. 
-- Retorne os nomes dos cinemas em ordem alfabética.
SELECT c.*, m.*
FROM pixar.theater c
RIGHT JOIN pixar.movies m
ON c.id = m.theater_id
ORDER BY c.name;
-- Exercício 6: Utilizando SUBQUERY faça uma busca, que retornem os títulos dos filmes que possuem avaliação maior que 7.5.
SELECT title, (SELECT rating FROM pixar.boxoffice WHERE movie_id = pixar.movies.id) AS rating
FROM pixar.movies;
-- Exercício 7: Utilizando SUBQUERY faça uma busca, que retornem as avaliações dos filmes lançados depois de 2009.
SELECT rating FROM BoxOffice
WHERE movie_id IN (SELECT id FROM Movies WHERE `year` > 2009);
-- Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.
SELECT `name`, location FROM pixar.theater AS t
WHERE EXISTS (SELECT * FROM pixar.movies WHERE t.id = theater_id);
-- Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.
SELECT `name`, location FROM pixar.theater AS t
WHERE NOT EXISTS (SELECT * FROM pixar.movies WHERE t.id = theater_id);