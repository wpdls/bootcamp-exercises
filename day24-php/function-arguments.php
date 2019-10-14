<?php

function asses_number($a)
{
    return $a > 10;
}

$number = 6;

$result = asses_number($number);


function headline($text, $level = 1) {
    return "<h{$level}>{$text}<h{$level}>";
}

//second parameter gets default value 1
echo headline('Main headline');

//second parameter gets given value 2
echo headline('Second headline', 2);