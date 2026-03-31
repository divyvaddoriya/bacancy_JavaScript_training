console.log("1");


setTimeout(function() {
 console.log("2");
}, 0);


queueMicrotask(function() {
 console.log("3");
});


Promise.resolve().then(function() {
 console.log("4");
  queueMicrotask(function() {
   console.log("5");
 });
});


setTimeout(function() {
 console.log("6");
}, 0);


console.log("7");

// OUTPUT 

// 1 , 7 , 3 , 4 , 5 , 2 , 6

// EXPLANATION 

// MICROTASK > MACROTASK ( PRIORITY )

// FIRST 1 AND 7 WILL BE PRINT AT THAT TIME 3 AND 4 WILL BE IN MICROTASK , AND 2 AND 6 WILL BE IN MACROTASK 

// THEN 3 WILL BE PRINT AND 4 WILL BE PRINT AND AT THAT TIME 5 WILL ALSO GO INTO THE MICRO TASK AND 5 WILL ALSO GET PRINT 

// ṆOW MICRO TASK WILL START TO GET PRINT AND 2 AND 6 WILL GET PRINT 