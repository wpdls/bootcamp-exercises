<?php

require_once 'DB.php';
require_once 'DB_functions.php';

connect('localhost', 'games', 'root', 'rootroot');

$orderby = isset($_GET['orderby']) && $_GET['orderby'] == 'rating' ? 'rating' : 'name';

$orderway = isset($_GET['way']) && $_GET['way'] == 'desc' ? 'DESC' : 'ASC';

$query = ' SELECT *
    FROM `games`
    WHERE 1
    ORDER BY 
';



$results = select($query, [], 'games');



header('Content-type: application/json');
echo json_encode($results);