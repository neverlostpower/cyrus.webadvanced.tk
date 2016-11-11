console.log("%cBQE %cGRAND PRIX", "color: red;", "color: green;");

var timer = 0;
var counter = 0;


for (var i = 0; i < 500; i++) {
setTimeout(function() {



  var cars = "";
  for (s = 0; s <1; s++) {
    if (Math.random()*100 < 40) {
    cars += "         🚘 ";
  } else {
    cars += "     🚔";
    }
}


  console.log(cars);

  }, timer);
timer += 40;
counter++;

}
