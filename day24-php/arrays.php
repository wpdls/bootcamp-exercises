<?php

$cars_i_want = [];
$cars_i_want = array();


$cars_i_want [] = 'Aston Martin';
$cars_i_want [] = 'Bugatti';
$cars_i_want [] = 'Ferrari';
$cars_i_want [] = 'Lamborghini';
$cars_i_want [] = 'Maserati';
$cars_i_want [] = 'Mercedes';
$cars_i_want [] = 'Porsche';
$cars_i_want [] = 'Skoda';

var_dump($cars_i_want);

echo "For myself I would buy $cars_i_want[1]";
echo "For my spouse I would buy $cars_i_want[3]";

$cars_i_want [4] = 'Smart';

var_dump($cars_i_want);

echo "Each of my kids will get a $cars_i_want[4].<br>";


echo "<ul>";
foreach ($cars_i_want as $cars) {

    echo "<li>{$cars}</li>";
};
echo "</ul>";

$car_prices = [
    'Skoda Octavia' => 270000,
    'Volkswagen Golf' => 170000,
    'BMW X6' => 380000,
    'Porsche_911' => 1150000
];
var_dump($car_prices);



echo "You can have a Porsche for just {$car_prices['Porsche_911']} CZK. <br>";

echo "<br>";

foreach ($car_prices as $carName => $car) {

    echo "The price of {$carName} is {$car} CZK.<br>";
};