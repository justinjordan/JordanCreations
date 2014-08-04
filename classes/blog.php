<?php

class Blog
{
    private $link;
    private $table;
    
    /* Singleton Instance */
    public static function Instance()
    {
        static $inst = null;
        if ( $inst === null )
        {
            $inst = new Blog();
        }
        
        return $inst;
    }
    /* End of Singleton */
    
    /* Construct when instance is created */
    public __construct( $link, $table = 'blog' )
    {
        $this->link = $link;
        $this->table = $table;
    }
    /* end */
    
    /* Get blog post(s) at specified location */
    /* $i is the location, and $num is how many [optional] */
    public function getPosts( $i, $num = 1 )
    {
        /* TODO:
        
            Remove "*" from query, and replace with column names.
            
        */
        $result = $this->link->query( "
            SELECT * 
            FROM $this->table 
            ORDER BY id DESC 
            LIMIT $i, $num
        ");
        
        return $result->fetch_assoc();
    }
    
    /* TODO:
    
        function submitPost()
        function editPost()
        function deletePost()
    
    */
}

?>