// Create a simple HTML page with:
// One input field (name)
// Two buttons: Save and Load
// On Save:
// Store the value in localStorage
// Store the same value in sessionStorage
// On Load:
// Retrieve and display values from both storages


let input = document.getElementById('data')
let submit = document.getElementById('submit')
let load = document.getElementById('load')

submit.addEventListener('click' , onSubmit)
load.addEventListener('click' , onLoad)

function onSubmit() {    

    localStorage.setItem('data' , input.value)
    sessionStorage.setItem('data' , input.value)
}

function onLoad() {

    let output = document.getElementById('output')
    
    let local = localStorage.getItem('data')
    
    let session = sessionStorage.getItem('data')

    output.innerText = local + " local data \n" + session + " session data " 
}


//  on page refresh both data stays 
//  but on tab close only the local data stays , the other data will be gone  