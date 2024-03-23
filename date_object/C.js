function printTime(){
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    
    console.log(hours+":"+mins+":"+secs);
}

setInterval(printTime, 1000)