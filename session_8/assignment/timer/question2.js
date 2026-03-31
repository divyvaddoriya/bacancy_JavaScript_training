// Exercise 2: setTimeout in Loop (Fix the Bug)


// **Task:** Fix the following code so it logs 0, 1, 2 instead of 3, 3, 3.


// ```javascript
// // BUGGY CODE - Fix this


for (let i = 0; i < 3; i++) {
 setTimeout(function() {
   console.log(i); // Currently logs: 3, 3, 3
 }, 1000);
}


// // TODO: Fix the code above to log 0, 1, 2


// explanation 

// here in buggy code we have used var because of which when in synchronously it get executed it will point to the same var , so after 1 second it will point to the same var 
// which is last value for the i in var
// so it will print the [3,3,3]

//  in case of the let it will create new lexical binding for each scope and because of which it will have access to its lexical binding when it is created 
// so bcause of which it print the [0,1,2]