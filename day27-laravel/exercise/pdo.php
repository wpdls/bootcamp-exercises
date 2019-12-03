<?php

$pdo = new PDO(
    "mysql:dbname=games;host=localhost;charset=utf8", 
    'root',
    'rootroot'
);

var_dump($pdo);

$query = "
    SELECT *
    FROM `games`
    WHERE `rating` > ?
    ORDER BY `rating` DESC
";

// prepare the query , get the statement object
$statement = $pdo->prepare($query);

// execute the query;
// send the query and the values separately to the database
// $statement->execute([ 50 ]);


if (!$statement->execute([ 50 ])) {

    //handle errors
    die('There was an error');
}

$next_result = $statement ->fetch();