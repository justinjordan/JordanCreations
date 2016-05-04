<?php

$success = false;
$error_msg = '';

$link = new mysqli('localhost', 'root', 'mypass123', 'chatapp');

if ( $link->connect_errno )
{
    $error_msg = 'Database connection error.';
}
else
{
    if ( !($stmt = $link->prepare("SELECT MAX(id) FROM messages")) )
    {
        $error_msg = 'Statement preparation error.';
    }
    else
    {
        if ( !$stmt->execute() )
        {
            $error_msg = 'Database query error.';
        }
        else
        {
            if ( !$stmt->bind_result($id) )
            {
                $error_msg = 'Bind result error.';
            }
            else
            {
                if ( !$stmt->fetch() )
                {
                    $error_msg = 'Fetch result error.';
                }
                else
                {
                    $success = true;
                }
            }
        }
    }
}



echo json_encode(array('success' => $success, 'error_msg' => $error_msg, 'id' => $id));