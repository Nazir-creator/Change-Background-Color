// Reference to our Dom 

const button = document.querySelector('button')
const body = document.querySelector('body')
// Random colors
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange', 'brown', 'white', 'peach', 'gray', 'aqua', 'azure', ]

body.style.backgroundColor = 'skyblue'
button.addEventListener('click', changeBackground)


// Change background color Function..
function changeBackground() {

    // Generate random colors..
    const colorIndex = Math.floor((Math.random() * colors.length))
    body.style.backgroundColor = colors[colorIndex]
}