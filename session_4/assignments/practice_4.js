function masterClone(data) {
    
    if((typeof data  !== "object") || (typeof data == null)){
        return data;    
    }

    if(Array.isArray(data)) {
        return data.map((d) => masterClone(d));
        
    let result = {}

    for(let i of Object.keys(data) ) {
        result[i] = masterClone(data[i])
    }

    return result;

}

let data = {name: "divy" , age: {name : "hi" , age: 20}}

let copy = masterClone(data);

copy.age.name = "ayush"

console.log(data);
console.log(copy);