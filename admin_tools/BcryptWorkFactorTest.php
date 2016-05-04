<?php

/*  unit_test/BcryptWorkFactorTest.php  */

/* Load Dependencies */
require_once('../classes/mysqlinfo.php');
require_once('../classes/Connection.php');
require_once('../classes/UserSystem.php'); // Includes Bcrypt Class

$link = new Connection( MYSQL_HOST, MYSQL_USER, MYSQL_PASS, MYSQL_DB );
$login = new UserSystem($link);

if ( $login->rights == 2 ) // 2 for admin
{
    function TestWorkFactor($work_factor = 10)
    {
        $startTime = microtime(true);
        $hash = Bcrypt::CreateHash('password', null, $work_factor);
        $duration = microtime(true) - $startTime;

        return $duration;
    }


    echo 'Work Factor Test:<br/><br/>';

    for ($i = 10; $i <= 16; $i++)
    {
        $duration = TestWorkFactor($i);

        echo $i .' took '. $duration .' seconds.<br/>';
    }
}
else
{
    echo 'I like turtles.';
}