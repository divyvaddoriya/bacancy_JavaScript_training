function dymaniChunk(arr ){

    let size = 1;
    let lastInd = 0;
    return arr.reduce((acc , val , index) => {   
        if((index < lastInd + size -1) &&  ((index + 1) % (size) != 0 || (index + 1) % (size - 1) != 0 )) return acc
        else if ( (index + 1) % size == 0 ){
            acc.push(arr.slice(index , index + size))
            size+=1;
            lastInd = index
        }   
        return acc
    } , [])
}

console.log(dymaniChunk([1,2,3,4,5,6,7,8,9]))