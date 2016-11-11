$(document).ready(function() {

var times_run = 0;
var timer;
var currentword = ["Where ", "should ", "I ", "begin", ".", ".", ".", ".", " ",];


function addword(symbol) {
  document.getElementById("intro").innerHTML += symbol;
}

var timer = setInterval(function(){
    addword(currentword[times_run]);


times_run += 1;


    if(times_run == 8){
      times_run = 0;
setTimeout(function(){window.location.href='index_2.html'});

      //clearInterval(timer);
    }
}, 1050);



});
