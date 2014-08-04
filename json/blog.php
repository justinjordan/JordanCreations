<?php

/* Load Dependencies */
/* inludes 'connection' and 'blog' objects */
require("include.php");

/* Retrieve GET Data */
$i = 0;
$num = 1;

if ( $_GET['i'] )
{
    $i = $_GET['i'];
}
if ( $_GET['num'] )
{
    $num = $_GET['num'];
}
/* End of Retrieve GET */



?>