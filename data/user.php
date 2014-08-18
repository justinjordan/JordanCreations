<?php

/* data/user.php */

/* Load Dependencies */
require_once('../classes/Connection.php');
require_once('../classes/UserSystem.php');

/* Create API Class Objects */
$link = new Connection('localhost', 'root', 'root', 'jordancreations');
$userSystem = new UserSystem($link);

/* Retrieve GET Data */
if ( isset($_GET['handle']) )
{
    $user_handle = $_GET['handle'];


    if ($user = $userSystem->GetUserInfo($user_handle))
    {

        echo '['; // open array

        for ( $i = 0; $i < count($user); $i++ )
        {
            echo '{'; // open object
            echo '"handle":"'. $user[$i]['user_handle'] .'",';
            echo '"name":"'. $user[$i]['user_name'] .'",';
            echo '"email":"'. $user[$i]['user_email'] .'",';
            echo '"image":"'. $user[$i]['user_image'] .'"';
            echo '}'; // close object

            if ( $i < count($user)-1 )
            {
                echo ',';
            }
        }

        echo ']'; // close array

    }
    else
    {
        /* USER NOT FOUND */

        echo $link->connection->error;
    }
}
else
{
    /* server doesn't know what user you are requesting */
    
    echo 'Who?';
    
}

