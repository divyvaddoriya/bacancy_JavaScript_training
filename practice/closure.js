// function x(){
//     var a = 7

//     return function y () {
//         console.log(a);
//     }
// }

// var a = 10;

// x()();



// function x() {
//     var a = 7
//     function y () {
//         console.log(a);
//     }
//     a = 100
//     return y
// } 

// var z = x()
// console.log(z);
// z()
// it will return 100
 

function z() {
    var b = 900
    function x(){
        var a = 7
        function y() {
            console.log(a , b);
        }
        y()
    } 
    x() 
}
z()

