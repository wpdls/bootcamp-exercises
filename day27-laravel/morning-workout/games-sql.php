<?php

require_once 'DB.php';
require_once 'DB_functions.php';

connect('localhost', 'games', 'root', 'rootroot');

// get data from URL ($_GET) **ALL THREE ARE THE SAME

// 1. Approach 1: default value & condition
// $orderway = 'ASC';
// if (isset($_GET['way']) && $_GET['way'] == 'desc') {
//     $orderway = 'DESC';
// }

// 2. ternary operator 
$orderway = isset($_GET['way']) && $_GET['way'] == 'desc' ? 'DESC' : 'ASC';

// 3. extended
// if (isset($_GET['way'])) {

//     switch($_GET['way']) {
//         default:
//         case 'acs':
//             $orderway = 'ASC';
//             break;
//         case 'desc':
//             $orderway = 'DESC';
//             break;
//     }

// } else {
//     $orderway = 'ASC';
// }
$orderby = isset($_GET['orderby']) && $_GET['orderby'] == 'rating' ? 'rating' : 'name';

$query = 'SELECT * 
    FROM `games`
    WHERE 1
    ORDER BY {$orderby} {$orderway}
    ';

$results = select($query, [], 'games');


header('Content-type: application/json');
echo json_encode($results);
