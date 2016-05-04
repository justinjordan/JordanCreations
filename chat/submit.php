<?php

$success = false;
$error_msg = '';

if ( !isset($_POST['input'], $_POST['user']) )
{
    $error_msg = 'Post data not received.';
}
else
{
    
    $link = new mysqli('localhost', 'root', 'mypass123', 'chatapp');

    if ( $link->connect_errno )
    {
        $error_msg = 'Database connection error.';
    }
    else
    {
        if ( !($stmt = $link->prepare("INSERT INTO messages(message,user) VALUES (?,?)")) )
        {
            $error_msg = 'Statement preparation error.';
        }
        else
        {   
            $stmt->bind_param('ss', $_POST['input'], $_POST['user']);
            
            $success = $stmt->execute();
        }
        
        // Clean Database ******************
        $stmt = $link->query("DELETE FROM messages WHERE time < (NOW() - INTERVAL 1 MINUTE)");
        
    }
}


echo json_encode(array('success' => $success, 'error_msg' => $error_msg));