function fakeDownloadPromise(){
    let correct = true
    return new Promise(function (resolve,reject){
        setTimeout(function(){
            let downloadedData = "Something"
            if(correct){
            resolve(downloadedData)
            }
            else{
                reject(new Error("GOT AN ERROR"))
            }
        },1000)
    })
}

fakeDownloadPromise().then(function(data){
    console.log("The data that we downloaded is")
        console.log(data)
    
}).catch(function(err){
    console.log(err)
})

let downloaded = fakeDownloadPromise();
downloaded.catch(function(err){
    console.log(err)
})

setTimeout(function()
{
    downloaded.then(function (data){
    console.log("DATA DOWNLOADED IS")
    console.log(data)
})
},3000)