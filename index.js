// When the button is clicked
$("button").on("click", function(){
    var key = $(this).html();
    play(key);
    animateBtn(key);
})

// When the key is pressed
$(document).on("keydown", function(event){
    var keyPressed = event.key;
    play(keyPressed);
    animateBtn(keyPressed);
})


function play(key)
{
    switch(key)
    {
        case 'A':
            var aud1 = new Audio("crash.mp3");
            aud1.play();
            break;

        case 'S':
            var aud2 = new Audio("snare.mp3");
            aud2.play();
            break;

        case 'D':
            var aud1 = new Audio("tabla.mp3");
            aud1.play();
            break;

        case 'F':
            var aud1 = new Audio("saxo1.mp3");
            aud1.play();
            break;

        case 'G':
            var aud1 = new Audio("kick-bass.mp3");
            aud1.play();
            break;

        case 'H':
            var aud1 = new Audio("tom-1.mp3");
            aud1.play();
            break;
        
        case 'J':
            var aud1 = new Audio("tom-2.mp3");
            aud1.play();
            break;

        case 'K':
            var aud1 = new Audio("tom-3.mp3");
            aud1.play();
            break;
        
        case 'L':
            var aud1 = new Audio("tom-4.mp3");
            aud1.play();
            break;
        
        case 'M':
            var aud1 = new Audio("accordion.mp3");
            aud1.play();
            break;
        
        case 'N':
            var aud1 = new Audio("marcas.mp3");
            aud1.play();
            break;
        
        case 'O':
            var aud1 = new Audio("tambourine.mp3");
            aud1.play();
            break;
    }
}

function animateBtn(key)
{
    $("."+key).addClass("pressed");

    setTimeout(function(){
        $("."+key).removeClass("pressed");
    }, 100);
}