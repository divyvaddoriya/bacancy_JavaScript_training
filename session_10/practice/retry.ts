function retry<T>(
    fn: () => Promise<T> ,
    retries: number ,
    delay :number
){
    return new Promise((resolve , reject)=>{
        let count = 1;
        function call(){
            fn().then((data)=>{
                resolve(data)
            }).catch((err)=>{

                if(count == retries +1 ) {reject(err)
                   return;
                }
                
                count += 1

                setTimeout(()=>{
                    call() 
                } , delay)
            }
            )
        }
        call()
    })
}