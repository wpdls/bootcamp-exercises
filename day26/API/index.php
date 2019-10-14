<?php

require_once 'Celebrity.php';
require_once 'data.php';

$celebrities = [];

foreach ($data as $value) {
    $new = new Celebrity;
    $new->fromArray($value);
    array_push($celebrities, $new);
}

header('Content-type: application/json');

echo json_encode($celebrities);
// var_dump($celebrities);