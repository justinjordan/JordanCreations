<?php

/* data/login.php */

require_once('../classes/mysqlinfo.php');
require_once('../classes/Connection.php');
require_once('../classes/UserSystem.php');

$link = new Connection( MYSQL_HOST, MYSQL_USER, MYSQL_PASS, MYSQL_DB );
$login = new UserSystem($link);

$success = false;
$user = 'blank';
$pass = 'blank';

if ( isset( $_GET['user'], $_GET['pass'] ) )
{
    $user = $_GET['user'];
    $pass = $_GET['pass'];
    
    $success = $login->Login( $user, $pass );
}

$output = array(
    'success' => $success
);
echo json_encode($output);
