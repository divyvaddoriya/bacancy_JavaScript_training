async function fetchData () {
    try {       
        const data = await fetch("https://dummyjson.com/products?limit=10")
        const postData = await data.json()
        return postData;
    } catch (error) {   
        throw new Error("Error" , error)
    }
}

const posts = document.getElementById('posts')

const postData = fetchData();
postData.then((data)=> {
    console.log(data);
    data.products.forEach(p => {

        posts.append(post(p))
    });
    // data.forEach(()=>{
    // })
})

function post(data){
    const div = document.createElement('div')
    
    const button = document.createElement('button')
    
    button.innerText = 'Add To Cart'
    
    div.innerHTML = `
    <h3> Title : ${data.title}</h3>
    <img src=${data.thumbnail}></img>
    <div>stock : ${data.stock}</img>
    <img width={50px} height={50px}>price: ${data.price}</img>
    `

    button.addEventListener('click',() => addToCart(data))
    div.append(button)
    // <button id=${data.id} click=${addToCart(data)}>Add to cart</button>
    // document.getElementById(data.id).addEventListener('click' , addToCart(data))
    return div;
}

let cart = [];

cart = JSON.parse(localStorage.getItem("cart")) || [];

const addToCart = (product) => {    
    const existingItem = cart.find(item => item.id === product.id);

  if (!existingItem) {
    cart.push(product);
    product.stock -= 1
    console.log(product.stock);
    
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Cart:", cart);
  }else{
    console.log("it already exist in the cart")
  }
  
}

const cartDiv = document.getElementById('cart')
cart.forEach((data) => {
    const div = document.createElement('div')
    
    const button = document.createElement('button')
    
    button.innerText = 'Add To Cart'
    
    div.innerHTML = `
    <h3> Title : ${data.title}</h3>
    <img src=${data.thumbnail}></img>
    <div>stock : ${data.stock}</img>
    <img width={50px} height={50px}>price: ${data.price}</img>
    `

    button.addEventListener('click',() => addToCart(data))
    div.append(button)
    // <button id=${data.id} click=${addToCart(data)}>Add to cart</button>
    // document.getElementById(data.id).addEventListener('click' , addToCart(data))
    cartDiv.append(div)
})




// magic string 
// declaration merging  
// enum vs type union (magic string)