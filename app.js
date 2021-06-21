var min = 0
var sec = 0
var msec = 0
var minutes = document.getElementById('min')
var seconds = document.getElementById('sec')
var miliseconds = document.getElementById('msec')
var interval;


function start(){
    interval =  setInterval(function(){
        msec++
        miliseconds.innerHTML = msec
        if(msec >= 100){
            sec++
            seconds.innerHTML = sec
            msec = 0
        
        }
        else if(sec >= 60 ){
            min++
            minutes.innerHTML = min
            sec = 0
        }
    },10)
    var b = document.getElementById('str').disabled = true  
}


function pause(){
    clearInterval(interval)
    var b = document.getElementById('str').disabled = false  

}

function reset(){
    clearInterval(interval)
    var b = document.getElementById('str').disabled = false
    min = 0;
    sec = 0
    msec = 0
    minutes.innerHTML = min
    seconds.innerHTML = sec
    miliseconds.innerHTML = msec
}