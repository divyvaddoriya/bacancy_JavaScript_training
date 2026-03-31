
function mySetInterval(fn , delay ){

    let obj = {
        id : null,
        active : true
    }
    
    function next() {
        
        if(obj.active == false ) return ;

        // if(count == 0) return 
            obj.id = setTimeout(() => {
            fn()
            next()
        } , delay)
        
    }
   next()
    return obj
}

let x = mySetInterval(() => console.log("hi ") , 100)

function myClearInterval(x){
    x.active  = false
    clearTimeout(x.id)
}


setTimeout(() => myClearInterval(x) , 1000)