// assignment - 1

// Create an HTML file with a paragraph <p id="secret-message">Initial Text</p> and a button.
// On button click, select the paragraph using getElementById and change its text to "You found the secret message!".


const secretMessage = document.getElementById("secret-message")
const clicky = document.getElementById('click')
clicky.addEventListener('click' , ()=>{
    secretMessage.innerHTML = "You found the secret message!"
})

// assignment - 2

// Create three <div> elements with the class box.
// Select all boxes using querySelectorAll and change the background color of each box to lightblue using forEach.


// let boxes = document.querySelectorAll('div')
// boxes.forEach((box) => {
//     box.style.backgroundColor = 'lightblue'
// })


// assignments - 3


// Create a button with text "Clicks: 0".
// Initialize a variable count = 0.
// On each button click, increment count and update the button text accordingly.



let count = 0;
let button = document.getElementById('count')
button.addEventListener('click' , ()=>{
    count+=1;
    document.getElementById("output").innerHTML = count
})

// assignment - 4


// Create a <div> with a black border and white background.
// Define a CSS class .active that changes the background to green and text color to white.
// On click, toggle the .active class using classList.toggle().


let active = document.getElementById('active-box')

active.addEventListener('click' , ()=>{
    active.classList.toggle('active')
})