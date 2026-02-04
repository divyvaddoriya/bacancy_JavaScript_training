// ### Code Block 2: Nested Async

console.log("Start");


setTimeout(function() {
 console.log("Timeout 1"); 
  Promise.resolve().then(function() {
   console.log("Promise 1");
 });
}, 0);


Promise.resolve().then(function() {
 console.log("Promise 2");
  setTimeout(function() {
   console.log("Timeout 2");
 }, 0);
});


console.log("End");

// start , end , promise - 2 , timeout - 1  , promise - 1  , timeout - 2

//  first start will print , 
// then timeout 1 will go to macro task 
// then promise-2 will go to micto task
//  then synchronos end will print 
// now event loop will checck micro task will pop and promise - 2 will be print 
// then timeout will go to the macro task and 
// now micro task is empty so macrotask will print annd first timout will print then 
// at the end promise 1 will go to micro task 
// micro task will promise -1 will print and then timout - 2 will be print 