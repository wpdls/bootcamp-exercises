<?php

echo 'hello';

var_dump(__FILE__);

var_dump(__DIR__);

var_dump(
    pathinfo(__FILE__)
);

var_dump(
    pathinfo(__FILE__, PATHINFO_EXTENSION)
);

switch(pathinfo(__FILE__, PATHINFO_EXTENSION)) {
    case 'php':
        echo 'Treating this as a PHP file';
        break;
    case 'jpg':
        echo 'Treating this as a jpg file';
        break;
};

var_dump(scandir(__DIR__));

$directory_handle = opendir(__DIR__);

var_dump($directory_handle);


closedir($directory_handle);
