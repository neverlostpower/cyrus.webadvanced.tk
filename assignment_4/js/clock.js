
	//CURRENT TIME

	function updateClock() {
	      // Gets the current time
	      var now = new Date();

	      // Get the hours, minutes and seconds from the current time
	      var hours = now.getHours();
	      var minutes = now.getMinutes();
	      var seconds = now.getSeconds();
	      var mid=' AM';

	          if(hours==0){ //At 00 hours we need to show 12 am
	            hours=12;
	          }
	          else if(hours>12)
	          {
	            hours=hours%12;
	            mid=' PM';
	          }
	          if (minutes < 10) {
	            minutes = "0" + minutes;
	          }
	          if (seconds < 10) {
	            seconds = "0" + seconds;
	          }
						// Gets the element we want to inject the clock into
	      var elem = document.getElementById('clock');
				// Sets the elements inner HTML value to our clock data
	      elem.innerHTML = hours + ':' + minutes + ':' + seconds + mid;
	}
