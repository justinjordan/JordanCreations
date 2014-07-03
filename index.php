<!doctype html>
<html lang="en" ng-app>
<head>
	<title>JordanCreations</title>
	<link rel="stylesheet" type="text/css" href="reset.css"/>
	
	<link rel="stylesheet" type="text/css" href="style.css" media="screen, handheld"/>
	<link rel="stylesheet" type="text/css" href="enhanced.css" media="screen and (min-width: 40.5em)"/>
	<!--[if (lt IE 9)&(!IEMobile)]>
	<link rel="stylesheet" type="text/css" href="enhanced.css"/>
	<![endif]-->
	
	<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.18/angular.min.js"></script>
	<script src="main.js"></script>
</head>
<body>

<div id="wrapper-div">
    <div id="top-div">
        
    </div>
    <div id="head-div">
        <img src="images/logo.gif"/>
    </div>
    
    <div id="separator-div">
        <div class="outer-center">
            <div class="inner-center">
                <div id="nav-div">
                    <ul>
                        <li class="nav-selected"><a href="#">News</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Photo</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div><!-- nav-div -->
            </div><!-- inner-center -->
        </div><!-- outer-center -->
        <div class="clear"></div>
    </div><!-- separator-div -->
    
	<div id="main-div">

<?php
    for($i = 0; $i < 5; $i++):
?>
		<div class="bubble">
            <header>
                <figure><img src="images/thumbnail.jpg"/></figure>
                <h1>Synth Street</h1>
                <aside>by Justin Jordan [3 months ago]</aside>
            </header>
            <article>
                <p>Banh mi butcher master cleanse cornhole locavore jean shorts. Disrupt meh keffiyeh polaroid Kickstarter Echo Park Marfa deep v tote bag, single-origin coffee church-key kitsch gastropub. Locavore narwhal Schlitz bespoke, organic Tonx blog twee ennui. Narwhal lo-fi gentrify YOLO pour-over. Thundercats Echo Park letterpress, small batch keytar butcher salvia next level Shoreditch. Austin umami fanny pack mlkshk next level, swag YOLO church-key. Hella locavore keffiyeh crucifix American Apparel, typewriter whatever letterpress aesthetic XOXO skateboard.</p>

    <p>Synth street art polaroid iPhone Pinterest, ugh Cosby sweater fingerstache Pitchfork chia Tumblr next level pickled 8-bit. Gluten-free crucifix trust fund, art party umami Vice paleo sriracha. Banksy Cosby sweater small batch, YOLO shabby chic freegan mixtape fingerstache Pinterest lo-fi 3 wolf moon letterpress cliche bitters tattooed. Intelligentsia Thundercats seitan leggings quinoa you probably haven't heard of them. Single-origin coffee beard Odd Future swag jean shorts, church-key Godard. Typewriter crucifix asymmetrical Thundercats hashtag whatever, salvia tofu ethical brunch Cosby sweater organic. Gentrify Thundercats tattooed Blue Bottle, chia raw denim Echo Park pug.</p>
            </article>
		</div><!-- bubble -->
<?php
    endfor;
?>

	</div><!-- main-div -->
    <div id="footer-div">
        
    </div><!-- footer-div -->
</div><!-- wrapper-div -->

</body>
</html>
