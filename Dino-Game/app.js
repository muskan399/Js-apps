var character=document.getElementById('character')
var block=document.getElementById('block');

function jump(){
    character.classList.add("animate");
    setTimeout(function(){
character.classList.remove('animate');
    },500)
}

var checkDead=setInterval(() => {
    var charTop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft>0 && blockLeft<50 && charTop<560)
    {
       // character.style.animation=none;
         block.style.animation="none";
         block.style.display="none";
         alert("You Lose the Game!"); 
    }

}, 5);