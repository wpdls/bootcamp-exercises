<?php 
 
    function createRandomArray($length){
        $data = [];
        for($i = 0; $i < $length; $i++){
            $data[] = rand(1, 99);
        }
        return $data;
    }
 
    function echoArray($array){
        echo '<pre>' . implode('; ', $array) . '</pre>';    
    }
 
    // generate random array with length 5
    $data = createRandomArray(5);
 
    echoArray($data);
 

    // for($i = 0; $i <5; $i++) 
    // {
    //     for ($j = 0; $j <5; $j++) 
    //     {
    //         if ($data[$i] < $data[$j]) 
    //         {
    //             $tmp      = $array[1];
    //             $array[1] = $array[2];
    //             $array[2] = $tmp;
    //         }
    //     }
    // }

    // function bubble_Sort($data)
    // {
    //     do
    //     {
    //         $swapped = false;
    //         for( $i = 0, $c = count( $data ) - 1; $i < $c; $i++ )
    //         {
    //             if( $data[$i] > $data[$i + 1] )
    //             {
    //                 list( $data[$i + 1], $data[$i] ) =
    //                         array( $data[$i], $data[$i + 1] );
    //                 $swapped = true;
    //             }
    //         }
    //     }
    //     while( $swapped );
    // return $data;
    // }
 
    function bubble_Sort($data)
    {
        do
        {
            $swapped = false;
            for( $i = 0; $i < 4; $i++ )
            {
                if( $data[$i] > $data[$i + 1] )
                {
                    list( $data[$i + 1], $data[$i] ) =
                            array( $data[$i], $data[$i + 1] );
                    $swapped = true;
                }
            }
        }
        while( $swapped );
    return $data;
    }
 

   $newdata = bubble_Sort($data);
    echoArray($newdata);
?>

<?php 

// generate random array with length 5
$data = createRandomArray(5);

echoArray($data);
for ($j = 0; $j < count($data)-1; $j++) {

    for($i = 0; $i < count($data)-1-$j; $i++)
        {
            if($data[$i] > $data[$i+1]) {
                $tmp        = $data[$i];
                $data[$i]   = $data[$i+1];
                $data[$i+1] = $tmp;
            }
        }
}

echoArray($data);

?>