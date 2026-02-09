// assignment - 1

const secretMessage = document.getElementById("secret-message")
const clicky = document.getElementById('click')
clicky.addEventListener('click' , ()=>{
    secretMessage.innerHTML = "You found the secret message!"
})

// assignment - 2

// let boxes = document.querySelectorAll('div')
// boxes.forEach((box) => {
//     box.style.backgroundColor = 'lightblue'
// })

let count = 0;
let button = document.getElementById('count')
button.addEventListener('click' , ()=>{
    count+=1;
    document.getElementById("output").innerHTML = count
})

let active = document.getElementById('active-box')

active.addEventListener('click' , ()=>{
    active.classList.toggle('active')
})