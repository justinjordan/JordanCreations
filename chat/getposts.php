<?php

$success = false;
$error_msg = '';

if ( !isset($_GET['id']) )
{
    $error_msg = 'GET data not received.';
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
        if ( !($stmt = $link->prepare("SELECT id,message,user FROM messages WHERE id>?")) )
        {
            $error_msg = 'Statement preparation error.';
        }
        else
        {
            $stmt->bind_param('i', $_GET['id']);
            $stmt->execute();
            
            $stmt->bind_result($id, $message, $user);
            
            $messages = array();
            
            while ( $stmt->fetch() )
            {
                $row = array($id, $message, $user);
                array_push($messages, $row);
            }
            
            $stmt->close();
        }
    }
}

echo json_encode(array('success' => $success, 'error_msg' => $error_msg, 'messages' => $messages));