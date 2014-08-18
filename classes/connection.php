<?php

/* Connection.php */

class Connection
{
    
    public $connection;
    
    /* Constructor and Deconstructor */
    public function __construct( $host, $user, $pass, $db )
    {
        $this->connection = new mysqli( $host, $user, $pass, $db );
    }
    
    public function __destruct()
    {
        $this->connection->close();
    }
    /* end */
    
    
    /* Shortcut to query function */
    /* Returns 2d Array of rows */
    public function Query( $query )
    {        
        $output = array();
        
        if ( $result = $this->connection->query( $query ) )
        {
            while ( $row = $result->fetch_assoc() )
            {
                array_push( $output, $row );
            }
            
            return $output;
        }
        else
        {
            return false;
        }

    }
    /* End of Shortcut */
    
    /* Clean queries */
    public function Clean( $query )
    {
        /* Check if PHP auto-sanitize is enabled */
        if ( get_magic_quotes_gpc() )
        {
            return $query;
        }
        /* Otherwise proceed with sanitation */
        else
        {
            return $this->connection->real_escape_string( $query );
        }
    }
    /* End of Clean */

}