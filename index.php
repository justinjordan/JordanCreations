<!doctype html>
<html lang="en" ng-app="jcApp">
<head>
	<title>JordanCreations</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
	<link rel="stylesheet" type="text/css" href="reset.css"/>
	
	<link rel="stylesheet" type="text/css" href="style.css" media="screen, handheld"/>
	<link rel="stylesheet" type="text/css" href="enhanced.css" media="screen and (min-width: 40.5em)"/>
	<!--[if (lt IE 9)&(!IEMobile)]>
	<link rel="stylesheet" type="text/css" href="enhanced.css"/>
	<![endif]-->
	
	<script src="angular.min.js"></script>
    <script src="angular-route.min.js"></script>
    <script src="app.js"></script>
    <script src="controllers.js"></script>
</head>
<body>

<div id="wrapper-div">
	<div id="mobile-nav">
		<ul>
			<li>News</li>
			<li>Blog</li>
			<li>Photos</li>
			<li>Contact</li>
			<li>About</li>
		</ul>
	</div>
	
    <div id="top-div">
        
    </div>
    <div id="head-div">
        <img src="images/logo.gif"/>
    </div>
    
    <div id="separator-div">
        <div class="outer-center">
            <div class="inner-center">
                <div id="nav-div">
					<div id="mobile-menu-button"></div>
                    <ul>
                        <li class="nav-selected"><a href="#home">News</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Photo</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </div><!--end #nav-div -->
            </div><!--end .inner-center -->
        </div><!--end .outer-center -->
        <div class="clear"></div>
    </div><!--end #separator-div -->
    
    <!-- Main view -->
	<div id="main-div" ng-view></div>
    
    <!-- Footer -->
    <div id="footer-div">
        
    </div><!--end #footer-div -->
</div><!--end #wrapper-div -->
    
</body>
</html>
