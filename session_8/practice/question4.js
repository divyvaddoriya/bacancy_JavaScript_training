// Problem 4 — Implement retry with Exponential Backoff

// This is a real production pattern (APIs, DB connections, distributed systems).


function retry (fn , retries , delay){

    let tries = retries;

    return new Promise((resolve , reject) => {

        function trying (delay) {
            setTimeout(() => {
              Promise.resolve(fn()).then((data) => {
                resolve(data)
              }).catch((err)=>{
                if(tries == 1 ){
                    reject(err)
                }

                console.log("trying for " , tries);
                
                tries--;
                
                trying(delay*2)
              })
            } , delay)  
        }   
        trying( delay )
    })

}

retry(() => fetch("api" ) , 3 , 500)