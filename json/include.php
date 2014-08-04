<?php

DEFINE('ROOT_PATH', $_SERVER['DOCUMENT_ROOT']);

/* Load Singleton Connection Object */
require( ROOT_PATH . '/classes/connection.php' );
$link = Connection::Instance( 'localhost', 'root', 'root', 'jordancreations' );

/* Load Singleton Blog Object */
require( ROOT_PATH . '/classes/blog.php' );
$blog = Blog::Instance( $link );

?>