var timelimit = function(fn , t ){
    return async function (...args){
   
        let start = Date.now()
        let x = setTimeout(()=>{
            // let end = Date.now()
            fn(args)
            if(Date.now() - start > t){
                clearTimeout(x)
            }
        } , t)
        console.log(Date.now() - start);
        
    }
}

function sum(a,b) {
    for(let i = 0;i<10000000;i++) ;

    return a+b
}

let x = timelimit(sum , 5)

x(2 , 3)