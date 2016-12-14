var windSpeed;
var windDirection;

function getWeather() {
    var location = "new york, ny";

    $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '")&format=json', function (data) {
        /* Check that a place was found (we'll just grab the first) */
        if (data.query.results === null) {
            console.log("Location not found: " + location + "!");
        } else {
            console.log(data.query.results);
            console.log(data.query.results.channel.wind.speed);
            windSpeed = parseInt(data.query.results.channel.wind.speed);
        }
    });

};

getWeather();


if (windSpeed <= 20){
    $("#flag").removeClass('invisible');
};

