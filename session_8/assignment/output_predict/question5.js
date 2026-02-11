console.log("Start");


async function asyncFunction() {
 console.log("Async 1");
  await Promise.resolve();
 console.log("Async 2");
}


asyncFunction();


Promise.resolve().then(function() {
 console.log("Promise 1");
});


setTimeout(function() {
 console.log("Timeout");
}, 0);


console.log("End");


// OUTPUT 

// START , ASYNC1 , END , ASYNC 2 , PROMISE 1 , TIMEOUT

// START ,ASYNC 1 ,  END  ( IT WILL PRINT IN SYNCHRONOUS ORDER AT THIS TIME ASYNC 2 , PROMISE 1 WILL BE IN MICROTASK QUEUE , TIMEOUT WILL BE IN MACRO TASK QUEUE  )
// NOW ASYNC 2 WILL GET PRINT , THEN PROMISE 1 
// TIMEOUT WILL BE PRINT (BECAUSE IT IS IN MACRO TASK )