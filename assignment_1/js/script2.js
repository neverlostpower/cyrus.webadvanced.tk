$(document).ready(function() {

var times_run = 0;
var timer;
var currentword = ["My name is Cyrus<br>", "It seemed logical to start off with a baby picture...<br>", "Anyways", "."];


function addword(symbol) {
  document.getElementById("page2").innerHTML += symbol;
}

var timer = setInterval(function(){
    addword(currentword[times_run]);


times_run += 1;


    if(times_run == 4){
      times_run = 0;
setTimeout(function(){window.location.href='index_3.html'});

      //clearInterval(timer);
    }
}, 3200);



});
