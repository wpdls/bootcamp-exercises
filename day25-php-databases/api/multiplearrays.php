<?php

$movie_names = [
    'tt0468569' => 'Dark Knight', 
    'tt0050083' => '12 angry men', 
    'tt0108052' => 'Schindler\'s list',
    'tt0110912' => 'Pulp fiction',
    'tt0167260' => 'Lord of the Rings: Return of the King',
    'tt0111161' => 'The Shawshank redemption',
    'tt0071562' => 'The Godfather II',
    'tt0060196' => 'The good, the bad and the ugly',
    'tt0137523' => 'Fight club',
    'tt0068646' => 'The Godfather',
  ];

  $movie_ratings = [
    'tt0111161' => 9.2,
    'tt0068646' => 9.2,
    'tt0071562' => 9.0,
    'tt0468569' => 8.9, 
    'tt0050083' => 8.9, 
    'tt0108052' => 8.9,
    'tt0110912' => 8.9,
    'tt0167260' => 8.9,
    'tt0060196' => 8.9,
    'tt0137523' => 8.8
  ];

$names_ratings = [];

foreach (array_keys($movie_names) as $keys) {
    array_push($names_ratings, [
        'name' => $movie_names[$keys],
        'rating' => $movie_ratings[$keys]
    ]);

}

// sort($names_ratings);

// usort($names_ratings, function($a, $b) {
//   if ($a['name'] > $b['name']) {
//     return 1;
//   } elseif ($a['name'] > $b['name']) {
//     return -1;
//   } else {
//     return 0;
//   }
// });

header('Content-type: application/json');

echo json_encode($names_ratings);