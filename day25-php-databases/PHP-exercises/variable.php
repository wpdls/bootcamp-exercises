<?php

//Variables & data types
$my_name = 'Jayne';
$height = 5.8;

 var_dump($my_name);
 var_dump($height);

//functions#1
function headline($text) {
    echo "<h1>$text</h1>";
}

headline('My website');

//functions#2
function headline2($text) {
    return "<h1>$text</h1>";
}

echo headline2('My website');

//functions#3
$inches = 12;

function inchesToCentimeters($number){
    return $cm = $number * 2.54;
}

echo inchesToCentimeters($inches);
echo '<br>';

//functions#4
$celsius = 100;

function celsiusToFahrenheit($temperature) {
    return $f = (9/5) * $temperature + 32;
}

echo celsiusToFahrenheit($celsius);

//conditions#1
$temperature = 36.5;

function isHealthy($temperature, ) {

}