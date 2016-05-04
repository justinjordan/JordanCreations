<?php

/* data/blog.php */

/* Load Dependencies */
require_once('../classes/mysqlinfo.php');
require_once('../classes/Connection.php');
require_once('../classes/BlogSystem.php');

/* Create API Class Objects */
$link = new Connection( MYSQL_HOST, MYSQL_USER, MYSQL_PASS, MYSQL_DB );
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
    
    $paragraphs = explode($replace, $msg);
    $output = array();
    
    for ( $i = 0; $i < count($paragraphs); $i++ )
    {
        array_push($output, array('text' => $paragraphs[$i]) );
    }
    
    return $output;
}

if ($posts = $blog->GetPosts($i, $num))
{
    $output = array();
    
    for ( $i = 0; $i < count($posts); $i++ )
    {
        array_push( $output, array(
            'id' => $posts[$i]['blog_id'],
            'title' => $posts[$i]['blog_title'],
            'handle' => $posts[$i]['user_handle'],
            'author' => $posts[$i]['user_name'],
            'thumbnail' => $posts[$i]['user_thumbnail'],
            'when' => $posts[$i]['blog_date'],
            'paragraphs' => formatText($posts[$i]['blog_message'])
        ));
    }
    
    echo json_encode($output);

}