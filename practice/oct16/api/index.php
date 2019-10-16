<?php

require_once 'DB.php';
require_once 'DB_functions.php';

connect('localhost', 'games', 'root', 'rootroot');

$query = '
    SELECT *
    FROM `games`
    WHERE 1
';

$results = select($query, '', 'games');

header('Content-type: application/json');
echo json_encode($results);