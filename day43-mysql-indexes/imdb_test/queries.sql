SELECT *
FROM `paragraphs`
WHERE `id` = 1337;

EXPLAIN
SELECT *
FROM `paragraphs`
WHERE `id` = 1337;

EXPLAIN
SELECT *
FROM `words`
WHERE `word` = 'kissed';

INSERT INTO `words`
(`word`, `count`)
VALUES
('february', 10);

INSERT INTO `words`
(`word`, `count`)
VALUES
('February', 10);

SELECT *
FROM `paragraphs`
WHERE `text` LIKE '%Edmond Dantès%'

SELECT *
FROM `paragraphs`
WHERE MATCH (`text`) AGAINST ('Edmond Dantès')