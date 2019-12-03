<?php

include 'data.php';
require_once 'Celebrity.php';

$celebrities = [];

foreach ($data as $value) {
    $new = new Celebrity;
    $new->fromArray($value);
    $celebrities[] = $new;
}

header('Content-type: application/json');
echo json_encode($celebrities);