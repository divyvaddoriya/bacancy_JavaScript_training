// not completed , not solved yet 


// const pool = new PriorityPromisePool(2)

// pool.add(() => fetchA(), 1)
// pool.add(() => fetchB(), 5)
// pool.add(() => fetchC(), 3)


// class PriorityPromisePool {
//     constructor(limit) {
//         this.limit = limit; 
//         this.active = 0;
//         this.queue = []
//         this.pause = false;
//     }

//      add(taskFn, priority = 0) {
        
//         return new Promise((resolve , reject) => {
            
//             if(this.pause || this.active >= this.limit){
//                 this.queue.push([   taskFn , priority ])
//             }        
//             else{
//                 this.active++;
//                 taskFn().then((data) => {
//                     resolve(data)
//                 })
//                 .catch(err => reject(err)) .finally(()=>{
//                     this.active--;
//                     if(this.queue.length  > 0){
//                         let poppedTask = this.queue.shift()
//                         this.add(poppedTask[0] , poppedTask[1])
//                     }
//                 })
//             }

//         })
//     }

//     pause() {}

//     resume() {}

//     size() {}
// }
