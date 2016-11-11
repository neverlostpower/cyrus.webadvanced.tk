$(document).ready(function() {

var times_run = 0;
var timer;
var currentword = ["The ", "End", "."];


function addword(symbol) {
  document.getElementById("outro").innerHTML += symbol;
}

var timer = setInterval(function(){
    addword(currentword[times_run]);


times_run += 1;


    if(times_run == 3){
      times_run = 0;

setTimeout(function(){window.location.href='index.html'});

      //clearInterval(timer);
    }
}, 2400);



});
