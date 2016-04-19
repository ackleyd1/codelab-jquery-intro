var $squares = $('td')
var $reset = $('button')
var alternate = 0
// called when we click a square, changes its text to a x or a o depending on
// the value of alternate, then updates the background accordingly
$squares.on('click', function(){
    if ($(this).text() === '') {
        if (alternate % 2 === 0) {
            $(this).text('X')
            alternate++
            changeBG(this)
        }
        else {
            $(this).text('O')
            alternate++
            changeBG(this)
        }
    }
})
// called when we click the reset button, changes all text to '' and
// the background to white
$reset.on('click', function() {
    $squares.text('')
    changeBG($squares)
})
// called when we need to update the background color of a square
function changeBG(element){
    if($(element).text() == 'X') {
        element.style.background = 'red'
    }
    else if ($(element).text() == 'O') {
        element.style.background = 'blue'
    }
    else {
        element.css('background', 'white')
    }
}
