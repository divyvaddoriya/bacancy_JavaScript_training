async function retires<T> (fn : () => Promise<T> , retry : number ) : Promise <T> {
    return new Promise((resolve , reject) => {
        let count : number = retry
        function trying(){
            
            fn().then((data) => {
                resolve(data)
            }).catch((err)=>{
                console.log("trying for the " , 
                count);
                count -= 1
                if(count == 0 ) { reject(err);
                    return;
                 }
                trying();        
            })
        
        }
        
        trying()
    })
}

function greet(){
    return Promise.reject()
}

retires(greet , 5)