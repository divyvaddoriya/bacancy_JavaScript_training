const input = [
    {id : 3 , tags :["a", "b"]},
    {id : 1 , tags :["c", "b"]},
    {id : 2 , tags :["a","c", "d"]},
    {id : 2 , tags :["d", "e"]},
]  

// const output = {
//     a: [2,3],
//     b : [1,3],
//     c : [1,2],
//     d: [2],
//     e: [2]
// }
let ans = input.reduce((acc ,obj) => {

obj["tags"].map((tag) => {
    
    if(!acc[tag]){
        acc[tag] = []
    }

    if(!acc[tag].includes(obj.id)) {
        acc[tag].push(obj.id)
        acc[tag].sort()
    } 
})
return acc;
}
,{})

console.log(ans)