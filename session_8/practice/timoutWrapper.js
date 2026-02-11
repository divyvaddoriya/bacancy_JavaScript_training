// 6️⃣ Implement Timeout Wrapper
function withTimeout(promise, ms) {

            let timer ;
            let p1 = new promise((_ , reject ) =>{
                setTimeout(()=>{
                    reject(new Error("timourt"))
                } , ms)   
            }) 
        
            return Promise.race([p1 , promise]).finally(() => clearTimeout(timer))

}


// If promise doesn't resolve within ms, reject with:

// Error("Timeout")


// Must:

// Clear timeout properly

// Avoid memory leak