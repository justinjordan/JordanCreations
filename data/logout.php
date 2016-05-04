<?php

/* data/login.php */

require_once('../classes/mysqlinfo.php');
require_once('../classes/Connection.php');
require_once('../classes/UserSystem.php');

$link = new Connection( MYSQL_HOST, MYSQL_USER, MYSQL_PASS, MYSQL_DB );
$login = new UserSystem($link);

if ( $login->Logout() )
{
    echo 'You are now logged out!';
}
else
{
    echo 'An error occurred!';
}