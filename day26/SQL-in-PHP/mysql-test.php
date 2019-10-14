<?php

require_once 'DB.php';
require_once 'DB_functions.php';

require_once 'Country.php';
require_once 'Region.php';

// connect to a database
connect('localhost', 'world', 'root', 'rootroot');

// prepare a query string
$query = 'SELECT * 
    FROM `country`
    WHERE `Population` > ?
';

// run the query
$results = select($query, [20000000], 'Country');

// practice
// $populations = array_map(function($country) {

//     return $country->getFormattedPopulation();

// }, $results);


// select('SELECT * FROM `countries`') ---- same thing as above where it says *prepare a query string

//var_dump($results);

$query2 = 'SELECT *
    FROM `Country`
    WHERE `Code` = ?
    LIMIT 1
    ';

$results2 = select($query2, ['CZE'], 'Country');

// var_dump($results2);

// $region = new Region;
// $region->name = 'Central Africa';
// $region->insert();

//echo 'A new regional was inserted with id ' . $region->id . '<br>';

//update the slug of Central Africa
$query = "
    SELECT *
    FROM `region`
    WHERE `name` = ?
";

$central_africa = select_one($query, ['Central Africa'], 'Region');

var_dump($central_africa);

$central_africa->slug = 'central-africa';
$central_africa->update();