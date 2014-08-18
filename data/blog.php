<?php

/* Load Dependencies */
require_once('../classes/Connection.php');
require_once('../classes/BlogSystem.php');

/* Create API Class Objects */
$link = new Connection('localhost', 'root', 'root', 'jordancreations');
$blog = new BlogSystem($link);


/* Retrieve GET Data */
$i = 0;
$num = 1;

if ( isset($_GET['i']) )
{
    $i = $_GET['i'];
}
if ( isset($_GET['num']) )
{
    $num = $_GET['num'];
}
/* End of Retrieve GET */

function formatText($input)
{
    $replace = '[br]';
    
    $msg = trim(preg_replace('/\s\s+/', $replace, $input));
    
    return explode($replace, $msg);
}

if ($posts = $blog->GetPosts($i, $num))
{
    
    echo '['; // open array

    for ( $i = 0; $i < count($posts); $i++ )
    {
        echo '{'; // open object
        echo '"id":"'. $posts[$i]['blog_id'] .'",';
        echo '"title":"'. $posts[$i]['blog_title'] .'",';
        echo '"handle":"'. $posts[$i]['user_handle'] .'",';
        echo '"author":"'. $posts[$i]['user_name'] .'",';
        echo '"imageUrl":"'. $posts[$i]['user_image'] .'",';
        echo '"when":"' . $posts[$i]['blog_date'] . '",';
        
        echo '"paragraphs":';
        
        $message = $posts[$i]['blog_message'];
        $paragraphs = formatText($message);
        
        echo '[';
        for ( $j = 0; $j < count($paragraphs); $j++ )
        {
            echo '{"text":"'. $paragraphs[$j] .'"';
            
            if ( $j < count($paragraphs)-1 )
            {
                echo '},';
            }
        }
        echo '}]';
        
        echo '}'; // close object

        if ( $i < count($posts)-1 )
        {
            echo ',';
        }
    }

    echo ']'; // close array
    
}
else
{
    /*  TODO:  Remove from Production Deployment  */
    //echo $link->connection->error;
}