$(document).ready(function() {

var times_run = 0;
var timer;
var currentface = ["🤓", "🎓", "🌞", "🍎", "🏃", "🎨", "🚘", "🏡",
"💸", "⏰", "📝"];



function addface(symbol) {
  document.getElementById("emojis").innerHTML += symbol;
}

var timer = setInterval(function(){
    addface(currentface[times_run]);


times_run += 1;


    if(times_run == 11){
      times_run = 0;
setTimeout(function(){window.location.href='index_8.html'});

      //clearInterval(timer);
    }
}, 2000);



});
