function runwithlimit<T>(tasks: (() => Promise<T>)[] , limit: number) : Promise<T[]> {
    return new Promise((resolve , reject) => {
        let completed = 0;
        let active = 0;
        let currIndex = 0;
        let hasError = false;
        const result : T[] = new Array(tasks.length)

        function runTheTask(){
            if(completed == tasks.length) 
            {
                console.log(result);
                resolve(result)
                return;
            }
            
            while(active < limit && currIndex < tasks.length && !hasError){
                const nextIndex = currIndex++;
                active++;

                tasks[nextIndex]().then((data)=>{

                    if(hasError) return ;
                    result[nextIndex] = data
                    active--;
                    completed++;
                    runTheTask()
              
                }).catch((err) => {
                    hasError  = true
                    reject(err)
                })
                
            }
        }

        runTheTask()
    })
}

function greet4(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("hi from the greet");
            reject("hi")
        }, 1000);
    })
}

let tasks = [
() => greet4() , () =>greet4(),
() => greet4() , () =>greet4(),
() => greet4() , () =>greet4(),
]

runwithlimit(tasks , 2)