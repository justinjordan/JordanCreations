<?php

class Connection
{
    /*  Singleton Instance  */
    public static function Instance( $host, $user, $pass, $db )
    {
        static $inst = null;
        if ( $inst === null )
        {
            $inst = new Connection( $host, $user, $pass, $db );
        }
        
        return $inst;
    }
    /* End of Instance */
    
    
    public $link;
    
    /* Constructor and Deconstructor */
    private __construct( $host, $user, $pass, $db )
    {
        $this->link = new mysqli( $host, $user, $pass, $db );
    }
    
    private __destruct()
    {
        $this->link->close();
    }
    /* end */
    
    
    /* Shortcut to query function */
    /* Returns Result */
    public function query( $query )
    {
        $clean = sanitize( $query );
        
        return $this->link->query( $clean );
    }
    /* End of Shortcut */
    
    /* Sanitize queries */
    public function sanitize( $query )
    {
        /* Check if PHP auto-sanitize function is enabled */
        if ( get_magic_quotes_gpc() )
        {
            return $query;
        }
        /* Otherwise proceed with sanitation */
        else
        {
            return $this->link->real_escape_string( $query );
        }
    }
    /* End of Sanitize */

?>