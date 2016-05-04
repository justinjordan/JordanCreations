// Init

var lastActivity = getTime();
var timeOut = 300000; // 5 minutes
var inactive = false;

var lastId = getLastId();

var user = "Anonymous";


// Focus on text input
$("#username-text").focus();



// Keypress listeners
$("#username-text").keypress(function(e) {
    // Pressed Enter
    if ( e.which == 13 )
    {
        $("#name-dialog").fadeOut(500);
        $("#input-text").focus();
        
        if ( $("#username-text").val() != '' )
        {
            user = $("#username-text").val();
        }
        
        // Start Retrieving Data
        update();
    }
});
$("#input-text").keypress(function(e) {
    if ( !inactive )
    {
        // Pressed Enter
        if ( e.which == 13 )
        {
            var input = $("#input-text");
            var inputVal = input.val();
            
            submitText(user, input.val());
            input.val('');
        }

        // Update lastActivity
        lastActivity = getTime();
    }
});



// Auto-Update
function update()
{
    $.ajax({
        url: 'getposts.php',
        type: 'GET',
        dataType: 'json',
        data: {
            id: lastId
        },
        error: function()
        {
            // ERROR
            displayError("Unable to retrieve data!");
            
        },
        success: function(data)
        {
            for ( var i = 0; i < data.messages.length; i++ )
            {
                var styleClass = "username";
                
                if ( data.messages[i][2] == user )
                {
                    styleClass += " self";
                }
                
                displayText("<p><span class=\""+ styleClass +"\">"+ data.messages[i][2] +":</span>"+ data.messages[i][1] +"</p>");
                
                lastId = data.messages[i][0];
            }
            
            
            // Create App Loop ***************
            if ( getTime() - lastActivity < timeOut )
            {
                window.setTimeout(update,1000);
            }
            else
            {
                inactive = true;
                displayText("<p class=\"error\">Your session has been timed-out!</p>");
            }
        }
    });
}

// App functions
function submitText(user, input)
{
    $.ajax({
        url: 'submit.php',
        type: 'POST',
        dataType: 'json',
        data: {
            input: input,
            user: user
        },
        error: function()
        {
            // ERROR
        },
        success: function(data)
        {
            if ( !data.success ) // back-end failed
            {
                // ERROR
            }
        }
    });
}

function getLastId()
{
    var id = 0;
    
    $.ajax({
        async: false,
        url: 'lastid.php',
        type: 'GET',
        dataType: 'json',
        error: function()
        {
            // ERROR
        },
        success: function(data)
        {
            if ( !data.success ) // back-end failed
            {
                // ERROR
            }
            else
            {
                id = data.id;
            }
        }
    });
    
    return id;
}

function displayError(text)
{
    $("#display").html("<p class=\"error\">"+ text +"</p>");
}

function displayText(text)
{
    $("#display").append(text);
    $("#display > p:last-child").hide().fadeIn(500);
}

// convenience function
function getTime()
{
    var d = new Date();
    
    return d.getTime();
}
