// Your code goes here
let logoHeader = document.querySelector('.logo-heading').addEventListener('click', event => {
    event.target.style.backgroundColor = '#ADD3E0'
    event.target.style.color = 'white'
})

logoHeader = document.querySelector('.logo-heading').addEventListener('dblclick', event => {
    event.target.style.backgroundColor = 'black'
    // event.target.style.color = 'white'
})

let bodyColorChange = document.querySelector('body').addEventListener('keydown', event => {
    if(event.keyCode === 70){
        event.target.style.backgroundColor = '#ADD3E0'
    }
})

bodyColorChange = document.querySelector('body').addEventListener('keyup', event => {
    if(event.keyCode === 70){
        event.target.style.backgroundColor = 'white'
    }
})

let introHeader = document.querySelector('.intro h2').addEventListener('mouseenter', event => {
    event.target.style.backgroundColor = '#ADD3E0'
})

introHeader = document.querySelector('.intro h2').addEventListener('mouseleave', event => {
    event.target.style.backgroundColor = 'white'
})