<?php

/* User.php */

require_once('Bcrypt.php');

class UserSystem
{
    private $link;
    private $table;
    
    public function __construct($link, $table = 'user')
    {
        $this->link = $link;
        $this->table = $table;
    }
    
    public function GetUserInfo($handle)
    {
        $handle = $this->link->Clean($handle);
        
        $query = "SELECT user_handle, user_name, user_email, user_image FROM $this->table WHERE user_handle='$handle'";
        
        return $this->link->Query($query);
    }
    
    public function Login($user, $pass)
    {
        $userClean = $this->link->Clean($handle);
        
        $query = "SELECT user_handle, user_hash, user_rights FROM $this->table WHERE user_handle=$userClean";
        $result = $this->link->Query($query);
        
        $user = $result[0]['user_handle'];
        $hash = $result[0]['user_hash'];
        $rights = $result[0]['user_rights'];
        
        if ( Bcrypt::Authenticate($pass, $hash) )
        {
            /* Access Granted */
            return createSession( $user, $rights );
        }
        else
        {
            /* Access Denied */
            return false;
        }
    }
    
    private function createSession($user, $rights)
    {
        
    }
    
    private function destroySession()
    {
        
    }
}