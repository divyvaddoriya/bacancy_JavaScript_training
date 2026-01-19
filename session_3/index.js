const user = {
    name : "divy",
    email: "vaddoriyadivy12@gmail.com",
    settings: { theme : "light"},
    printInfo : function (){
        // console.log(this.name);
        console.log(`${this.name} uses ${this.settings.theme}`);
    },

}

user.printInfo()

const updatedUser = {...user , name : "Admin"}
console.log(updatedUser);
console.log(user);

// var x = 1;

// function test() {
//   console.log(x);
//   var x = 2;
// }

// test();
// const obj = {
//   a: 50,
//   show: () => {
//     console.log(this.a);
//   }
// };

// console.log(this);


// obj.show();