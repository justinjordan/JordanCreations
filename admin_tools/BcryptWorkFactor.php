<?php

/*  unit_test/BcryptTest.php  */

if ( isset($_GET['iamauthorized']) ) // worst authentication ever!
{
    require('../classes/bcrypt.php');

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