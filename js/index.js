// Your code goes here
let logoHeader = document.querySelector('.logo-heading').addEventListener('click', event => {
    event.target.style.backgroundColor = '#ADD3E0'
    event.target.style.color = 'white'
    event.stopPropagation()
})

let navContainer = document.querySelector('.main-navigation').addEventListener('click', event => {
    event.target.style.backgroundColor = '#ADD3E0'
    event.target.style.color = 'red'
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

let destinationSection = document.querySelector('.content-destination').addEventListener('mousemove', event => {
    event.target.style.backgroundColor = '#ADD3E0'
})

let adventureHeading = document.querySelector('.inverse-content .text-content').addEventListener('mousedown', event => {
    
        event.target.style.backgroundColor = '#ADD3E0'
    
})

adventureHeading = document.querySelector('.inverse-content .text-content').addEventListener('mouseup', event => {
    event.target.style.backgroundColor = 'white'
})

let contentCopy = document.querySelector('.content-pick').addEventListener('copy', event => {
        event.target.style.backgroundColor = '#ADD3E0' 
})

document.querySelector('.nav').addEventListener('click', event => {
    event.preventDefault()
  })