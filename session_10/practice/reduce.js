const activities = [
  { userId: 1, type: "login", duration: 5 },
  { userId: 2, type: "browse", duration: 20 },
  { userId: 1, type: "browse", duration: 15 },
  { userId: 3, type: "login", duration: 3 },
  { userId: 2, type: "logout", duration: 2 },
  { userId: 1, type: "logout", duration: 1 },
  { userId: 1, type: "login", duration: 4 } // repeated action for same user
];

const result = activities.reduce((acc , val) => {

    if(!acc[val.userId]) {
        acc[val.userId] = {
            userId: val.userId,
            totalTime: 0
        }
    }

   acc[val.userId][val.type] = acc[val.userId][val.type] ? acc[val.userId][val.type] + 1 : 1
    acc[val.userId].totalTime += val.duration

    return acc

} , {})

// console.log(result);

const apiResponse = [
  { id: 1, name: "A", tags: "x,y,z" },
  { id: 2, name: "B", tags: ["x", "y"] },
  { id: 3, name: "C" }
];


const result1 = apiResponse.reduce((acc , {id , name , tags} , index) => {
    acc[id] = {
            id: id , 
            name: name, 
            "tags":   []
    }

    if(typeof tags === "string"){
        acc[id]["tags"] = tags.split(",")
    }
    
    if(Array.isArray(tags)){
        acc[id]["tags"] = [...tags]
    }

return acc;
} , {})


const roles = {
  admin: ["READ", "WRITE", "DELETE"],
  editor: ["READ", "WRITE"],
  viewer: ["READ"]
};

function canAccess(role , permission) {
    if(roles[role])
    return roles[role].includes(permission)
    else{
        return false
    }
}

console.log(canAccess("admin", "DELETE"));
console.log(canAccess("viewer", "WRITE"));
console.log(canAccess("unknown", "READ"));


// convert  Keys to uppercase 

function convertKeyToUpeerCase(obj){
        const ans = {}
        for(let k in obj){
            if(obj.hasOwnProperty(k)){
                ans[k.toUpperCase()] = obj[k]                
            }
        }
return ans;
}
console.log(convertKeyToUpeerCase({ name: "A", age: 30 }));