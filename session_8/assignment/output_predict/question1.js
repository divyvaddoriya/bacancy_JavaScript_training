console.log("1");


setTimeout(function() {
 console.log("2"); // macrotask
}, 0);


Promise.resolve().then(function() {
 console.log("3"); //microtask
});


console.log("4");


// output

// 1 , 4 , 3 , 2
