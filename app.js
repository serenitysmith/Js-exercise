var box = document.querySelector('.square');
// var screen = Window

// 👇️ Change text color on mouseover
box.addEventListener('mouseover', function () {
    box.style.backgroundColor = 'blue';
    //66
});
box.addEventListener('mouseleave', function () {
    box.style.backgroundColor = 'purple'
    //80
})

box.addEventListener('mousedown', function () {
    box.style.backgroundColor = 'red'
    //82
})

box.addEventListener('mouseup', function () {
    box.style.backgroundColor = 'yellow'
    //89
})

box.addEventListener('dblclick', function () {
    box.style.backgroundColor = 'green'
    //71
})
window.addEventListener('scroll', function () {
    box.style.backgroundColor = 'orange'
    //79
})

window.addEventListener('keydown', function (e) {
    var keypressed = e.keyCode;

    switch (keypressed) {
        case 66:
            box.style.backgroundColor = 'blue';
            break;
        case 80:
            box.style.backgroundColor = 'purple';
            break;
        case 82:
            box.style.backgroundColor = 'red';
            break;
        case 89:
            box.style.backgroundColor = 'yellow';
            break;
        case 71:
            box.style.backgroundColor = 'green';
            break;
        case 79:
            box.style.backgroundColor = 'orange';
            break;
        default:
            console.log('no corresponding color for key pressed')
    }

})



