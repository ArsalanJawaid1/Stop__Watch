// var sec = 0;
// var min = 0;
// var msec = 0;

// var secHeading = document.getElementById("sec");
// var minHeading = document.getElementById("min");
// var msecHeading = document.getElementById("msec");

// var interval;

// function timer(){
//     msec++
//     msecHeading.innerHTML = msec;
//     if (msec >= 100 ){
//         sec++
//         secHeading.innerHTML= sec;
//         msec = 0;
//         }
//         else if(sec >=60){
//             min++
//             minHeading.innerText = min;
//             sec = 0;
//         }
//     }
//     function Start(){
//     interval = setInterval(timer,10);
    
    
// }
// function pause(){
//     clearInterval(interval)
// }
// function Reset(){
//     sec = 0;
//     min = 0;
//     msec = 0;
//     secHeading.innerHTML = sec;
//     minHeading.innerHTML = min;
//     msecHeading.innerHTML = msec;
//     pause()
// }

var min = '';
var sec = '';
var msec = '';


var secHeading = document.getElementById('sec');
var minHeading = document.getElementById('min');
var msecHeading = document.getElementById('msec');
 
var interval = '';

function timer (){
    msec++
    msecHeading.innerHTML = msec;

    if ( msec > 99){
        sec++
        secHeading.innerHTML = sec;
        msec = 0;
    }
    if (sec >= 60 ){
        min++;
        minHeading.innerHTML = min;
        sec = "";
    }
}

function Start(){ 
 interval = setInterval (timer,10)    
}

function Pause(){
    clearInterval(interval);
}

function Reset(){
    sec = 0;
    min = 0;
    msec = 0;

    secHeading.innerHTML= sec;
    minHeading.innerHTML= min;
    msecHeading.innerHTML= msec;
    Pause();
}


















