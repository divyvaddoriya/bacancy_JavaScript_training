console.log("A");


Promise.resolve().then(function() {
 console.log("B");
  Promise.resolve().then(function() {
   console.log("C");
 });
  console.log("D");
});


Promise.resolve().then(function() {
 console.log("E");
});


setTimeout(function() {
 console.log("F");
}, 0);


console.log("G");


// OUTPUT : 

// A , G , B , D , E , C , F

// EXPLANATION 

// first A , G ARE SYNCHRONOUS SO THEY WILL PRINT AND THEN AT THAT TIME IN MICRO TASK B , E WILL BE IN MICRO TASK AND IN MACRO TASK IT WILL BE F 

//  SO FIRST B WILL PRINT AND AT THAT TIME C WILL APPEND IN MICRO TASK QUEUE AND D WILL BE PRINT  NOW NEXT MICRO TASK E WILL BE PRINT AND THEN C WILL PRINT 

// AND THEN MACRO TASK WILL BE EXECUTED F 
