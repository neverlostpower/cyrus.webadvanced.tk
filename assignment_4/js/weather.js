var windSpeed;

function getWeather() {
    var location = "new york, ny";

    $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '")&format=json', function (data) {
        /* Check that a place was found (we'll just grab the first) */
        if (data.query.results === null) {
            console.log("Location not found: " + location + "!");
        } else {
            console.log(data.query.results);
            console.log(data.query.results.channel.wind.speed);
            windSpeed = parseInt(data.query.results.
            channel.wind.speed);
            }
            
            if (windSpeed <= 10) {
            $("#flag").toggleClass('invisible');
            document.getElementById("myAudio").volume = 0.2;
        } else if (windSpeed > 10 && windSpeed <= 15) {
            $("#flag2").toggleClass('invisible');
            document.getElementById("myAudio").volume = 0.4;
        } else if (windSpeed > 15 && windSpeed <= 20) {
            $("#flag3").toggleClass('invisible');
            document.getElementById("myAudio").volume = 0.7;
        } else if (windSpeed > 20) {
            $("#flag4").toggleClass('invisible');
            document.getElementById("myAudio").volume = 0.9;
     }

    });

};

getWeather();
