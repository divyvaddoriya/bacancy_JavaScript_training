// question - 1
 

function promisesAll(promises){
    
    if (promises.length === 0) return resolve([]);

    let arr = new Array(promises.length)
    let completed = 0;

    return new Promise((resolve , reject) => {

        for(let i = 0 ; i< promises.length ; i++){
            Promise.resolve(promises[i]).then((data) => {
                arr[i] = data
                completed+=1;
                if(completed === promises.length){
                    resolve(arr)
                }
            }).catch((err) => {
                reject("one promise rejected" + err)
            })
       }
    })
}

// promise - 2 (promise all settled)

function promisesAllSetteled(promises){
    
    
    
    return new Promise((resolve , reject) => {
        
        if (promises.length === 0) return resolve([]);
        
        let arr = new Array(promises.length)
        let completed = 0;
        
        for(let i = 0 ; i< promises.length ; i++){
            Promise.resolve(promises[i]).then((data) => {
                arr[i] = {"resolved" : data}
                completed+=1;
                if(completed === promises.length){
                    resolve(arr)
                }
            }).catch((err) => {
                arr[i] = {"rejected" :  err}
                completed+=1
                if(completed === promises.length){
                    resolve(arr)
                }
            })
       }
    })
}

// question - 3 

// 3️⃣ Concurrency Limiter (Very Important)
// Problem:

// You have 100 async tasks but want to run only k at a time.

// Implement:

// function promisePool(tasks, concurrency) {
//   // tasks: array of functions returning promises
  
//   return new Promise((resolve , reject) => {
//     let ans = new Array(tasks.length)
//     let completed = 0;
//     let active = 0;
//     let currIndex = 0;


//     function runNext(){
//         if(currIndex == tasks.length ) return ;
//          if(completed == tasks.length) {
//                 resolve(ans)
//             }
        
//             while(active < concurrency && currIndex < tasks.length){
                

//         active+=1;
//         Promise.resolve(tasks[currIndex]()).then((data) => {
//             active -= 1
//             ans[currIndex] = {"status" : "sucess" , "value" : data }
//         }).catch((err) => {
//             active -= 1 
//             ans[currIndex] = {"status" : "reject" , "value" : err }
//         }).finally(() => {
//             currIndex+=1;
//             completed+=1
//             runNext()
//         }
//     )
// }


// }

// runNext()

// })

// }


function promisepool(tasks , k){
    
    return new Promise((resolve , reject) => {
        
        let result = new Array(tasks.length)
        let completed = 0;
        let active = 0;
        let index = 0;

        function pool() {

            if(completed == tasks.length) resolve(result);

            while(active < k && index < tasks.length){
                let currIndex = index++
                active ++ ;
                Promise.resolve(tasks[currIndex]())
                .then((data) => {
                    
                    result[currIndex] = data; 
                }).catch((err) => {
                    result[currIndex] = err; 
                    
                }).finally(() => {
                    active-- ;
                    completed ++ ;
                    pool()
                })

            }
            
        }
        pool()

    })

}

// Example:

// const tasks = [
//   () => fetchData(1),
//   () => fetchData(2),
//   () => fetchData(3),
//   ...
// ];

// promisePool(tasks, 3);


// At most 3 should run simultaneously.

// This tests:

// Scheduling

// Backpressure control

// Queue management


