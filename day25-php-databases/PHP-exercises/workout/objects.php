<?php

require_once 'User.php';

$steve = new User('steve', '12345');

$steve->id = 1;
$steve->username = 'steve';
$steve->name = 'Stephen';

//same as var_dump($steve);
$steve->dumpMe();

$john = new User('john', 'love');

var_dump($john);

