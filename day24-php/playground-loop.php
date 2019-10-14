<?php

$time_served = 0;

// while ($time_served < 10) {
//     $time_served++;

//     echo "The prisoner has served $time_served years";
// }

// do {
//     $time_served++;

//     echo "The prisoner has served $time_served years";
// }
// while ($time_served < 10 );

// for ($time_served = 0; $time_served < 5; $time_served++) {

//     echo "The prisoner has served $time_served years.<br>";

//     if ($time_served == 4) {
//         break;
//     }
// }

for ($time_served = 10; $time_served <= 10 && $time_served >= 0; $time_served--) {

    echo "The prisoner has $time_served more years to serve.<br>";

    if ($time_served <= 5) {

    echo "Going to a parole hearing... <br>";
        
        if ($time_served == 2) {
            
            echo "Paroled!<br>";
            break;
        }
    }
}