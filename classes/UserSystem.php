<?php

/* User.php */

require_once('Bcrypt.php');

class UserSystem
{
    public $user;
    public $name;
    public $rights;
    
    private $link;
    private $table;
    
    public function __construct($link, $table = 'user')
    {
        $this->link = $link;
        $this->table = $table;
        
        session_start();
        $this->checkSession();
    }
    
    public function GetUserInfo($handle)
    {
        $handle = $this->link->Clean($handle);
        
        $query = "SELECT user_handle, user_name, user_email, user_image FROM $this->table WHERE user_handle='$handle'";
        
        return $this->link->Query($query);
    }
    
    public function Login($user, $pass)
    {
        $userClean = $this->link->Clean($user);
        
        $query = "SELECT user_handle, user_name, user_hash, user_rights FROM $this->table WHERE user_handle='$userClean'";
        
        if ( $result = $this->link->Query($query) )
        {
            $user = $result[0]['user_handle'];
            $name = $result[0]['user_name'];
            $hash = $result[0]['user_hash'];
            $rights = $result[0]['user_rights'];

            if ( Bcrypt::Authenticate($pass, $hash) )
            {
                /* Access Granted */
                return $this->createSession( $user, $name, $rights );
            }
        }

        /* Access Denied */
        return false;
    }
    
    public function Logout()
    {
        return session_destroy();
    }
    
    private function checkSession()
    {
        if ( isset($_SESSION['user'], $_SESSION['name'], $_SESSION['rights']) )
        {
            $this->user = $_SESSION['user'];
            $this->name = $_SESSION['name'];
            $this->rights = $_SESSION['rights'];
        }
    }
    
    private function createSession($user, $name, $rights)
    {
        $_SESSION['user'] = $user;
        $_SESSION['name'] = $name;
        $_SESSION['rights'] = $rights;

        return isset( $_SESSION['user'], $_SESSION['name'], $_SESSION['rights'] );
    }
}