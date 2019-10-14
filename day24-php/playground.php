<?php

$first_name = "Jayne ";
$last_name = "Phillips";

echo $first_name;
echo $last_name;
echo "<br>";
echo $first_name . $last_name;
echo "<br>";

$year_of_birth = 1991;
$height = 173;

echo "Year of birth: $year_of_birth";
echo "<br>";
echo "Height: $height";

define('SERVER_SOFTWARE', 'Apache');

echo "<br>";

echo "This server is running on ".SERVER_SOFTWARE.".";
echo "<br>";

define ('MY_OS', 'iOS');
echo "My operating system is " .MY_OS. ".";
echo "<br>";

function greet ($whom) {
    return "Hello, $whom!";
}

echo greet('Prague');
echo "<br>";

function truncateString (&$string, $size) {
    $string =  mb_substr($string, 0, $size);
};
$sentence = 'Quick brown fox jumps over the lazy dog.';

truncateString($sentence, 10);

echo $sentence;
