//Promises
//A Promise is a better way for asynchronous programming when compared to the common way of using a setTimeout() type of method.
function asyncFunc(work){
    return new Promise(function(resolve, reject){
        if(work == " "){
            reject(error("Nothing"));
        }
        setTimeout(function(){
            resolve(work);
        }, 1000)
    });
}

asyncFunc("Work 1")
.then(function(result){
    console.log(result);
    return asyncFunc("Work 2")
}, function(error){
    console.log(error);
})
.then(function(result){
    console.log(result);
}, function(error){
    console.log(error);
});
console.log("End");