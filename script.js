var $squares = $('td')
var $reset = $('button')
var alternate = 0
// called when we click a square, changes its text to a x or a o depending on
// the value of alternate, then updates the background accordingly
$squares.on('click', function(){
    jQitem = $(this)
    if (jQitem.text() === '') {
        if (alternate % 2 === 0) {
            changeBG(jQitem, 'X')
        }
        else {
            changeBG(jQitem, 'O')
        }
        alternate++
    }
})
// called when we click the reset button, changes all text to '' and
// the background to white
$reset.on('click', function() {
    changeBG($squares)
})
// called when we need to update the background color of a square
function changeBG(jQobject, name=''){
    jQobject.text(name)
    if(name === 'X') {
        jQobject.css('background', 'red')
    }
    else if (name === 'O') {
        jQobject.css('background', 'blue')
    }
    else {
        jQobject.css('background', 'white')
    }
}
