const task = () => {
    return new Promise((resolve ,  rejext) => {
            console.log("this is runnig");
            rejext("error from this async task")
        })
}

function exponential (fn , delay , tries) {

    return new Promise((Resolve , reject) => {

        function runTask(ms){

            Promise.resolve(fn()).then((data)=>{
                Resolve(data)
            }).catch((err)=>{
                if(tries == 0) {
                    reject(err)
                    return;
                }   
                
                setTimeout(()=>{
                    tries--;
                    runTask(ms*2)
                }, ms)
            } )

        }
        runTask(delay)
    })  

}

exponential(task , 1000 , 3).catch((Err) => console.log(Err));


