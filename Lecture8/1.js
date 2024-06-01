function fakeDownload(done){ 
    setTimeout(function(){ //callbackk
        let downloadedData = "something"
        done(downloadedData)
    },1000)
}

fakeDownload(function(data){ //callback
    console.log("we have downloaded a file");
    console.log(data)
})

