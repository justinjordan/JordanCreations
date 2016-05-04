<?php

/* BlogSystem.php */

class BlogSystem
{
    private $link;
    private $blog_table;
    private $user_table;
    
    /* Construct when instance is created */
    public function __construct( $link, $blog_table = 'blog', $user_table = 'user' )
    {
        $this->link = $link;
        $this->blog_table = $blog_table;
        $this->user_table = $user_table;
    }
    /* end */
    
    /* Get blog post(s) at specified location */
    /* $i is the location, and $num is how many [optional] */
    public function GetPosts( $i = 0, $num = 1 )
    {
        /*  Clean client input to avoid sql injection  */
        $i = $this->link->Clean($i);
        $num = $this->link->Clean($num);
        
        $amount = $i + $num;
        $blog = $this->blog_table;
        $user = $this->user_table;
        
        /* Select blog posts and corrisponding user info */
        $query = "SELECT $blog.blog_id, $blog.blog_author, $blog.blog_title, $blog.blog_date, $blog.blog_message, $user.user_handle, $user.user_name, $user.user_thumbnail FROM blog LEFT JOIN user ON $user.user_handle=$blog.blog_author ORDER BY $blog.blog_id DESC LIMIT $i, $amount";
        
        if ($result = $this->link->Query($query))
        {
            return $result;
        }
        else
        {
            return false;
        }
        
    }
    
    public function WritePost( $author, $title, $message )
    {
        /*  Clean client input to avoid sql injection  */
        $author = $this->link->Clean($author);
        $title = $this->link->Clean($title);
        $message = $this->link->Clean($message);
        
        $query =    "INSERT INTO $this->blog_table (author, title, date, message) 
                    VALUE ($author, $title, NOW(), $message)";
        
        return $this->link->Query($query);
    }
    
    public function EditPost( $id, $title, $message )
    {
        /*  Clean client input to avoid sql injection  */
        $id = $this->link->Clean($id);
        $title = $this->link->Clean($title);
        $message = $this->link->Clean($message);
        
        $query =    "UPDATE $this->blog_table 
                    SET title=$title, message=$message 
                    WHERE id=$id";
        
        return $this->link->Query($query);
    }
    
    public function DeletePost( $id )
    {
        /*  Clean client input to avoid sql injection  */
        $id = $this->link->Clean($id);
        
        $query =    "DELETE FROM $this->blog_table 
                    WHERE id=$id";
        
        return $this->link->Query($query);
    }
    
}