const arr = [1,2,3,4,5]

function chunkArray(arr, chunkSize) {
    
    return arr.reduce((acc , val , index) => {    
        if(index%chunkSize == 0){
                acc.push(arr.slice(index , index + chunkSize))
            }
        return acc;
    } , [])

}

console.log(chunkArray(arr , 2));