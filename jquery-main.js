$(document).ready(function(){

// ==Initialize==
    
    // Shorten posts to one paragraph
    $(".bubble").each(function(){
    
        if ( $(this).find("p").length > 1 )
        {
            $(this).find("article > p").not("article > p:first-child").hide();
        }
        else
        {
            $(this).find("article > aside").hide();
        }
        
    });
    /*if ( $(".bubble > article > p").length > 1 )
    {
        $(".bubble > article > p").not(".bubble > article > p:first-child").hide();
    }
    else
    {
        $(".bubble > article > aside").hide();
    }*/
    
// ==Event Listeners==
    
    // Mobile menu buttons
    $("#mobile-menu-button").click(function()
    {
        showMenu();
    });
    $("#mobile-nav").click(function()
    {
        hideMenu();
    });

    // Show more/less buttons
    $(".showMore").click(function(e)
    {
        e.preventDefault();
        showMore($(this).parent().parent());
    });

// ==Methods==
    
    function showMore($selector)
    {
        $selector.find("p").slideDown();
        $selector.find(".showMore").hide();
    }
    
    function showMenu()
    {
        $('html, body').css({
            'overflow': 'hidden',
            'height': '100%'
        });

        $("#mobile-nav").slideDown();
    }

    function hideMenu()
    {
        $('html, body').css({
            'overflow': 'auto',
            'height': 'auto'
        })

        $("#mobile-nav").slideUp();
    }

});