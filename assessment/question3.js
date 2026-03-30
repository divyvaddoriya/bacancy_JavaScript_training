


async function retryApi(url , countRetry){

    if(countRetry == 0) return;

    await fetch(url).then(() => {
        console.log("success")
    }).catch((err)=>{
        console.log("try : " , countRetry);
        retryApi(url , countRetry - 1)
    })

    return;
}



retryApi("" ,5)