
/* AQI conditions js */

$.getJSON("https://www.purpleair.com/json?show=6014", function(data){
 
    var pm25 = data.results[0].PM2_5Value;
    var aqi;
    
    if (pm25 <= 12) {
        aqi = (50/12)*(pm25);
      } else if ((pm25>12) && (pm25 <= 35.4)) {
        aqi = ((49/23.3)*(pm25-12.1))+51;
      } else if ((pm25>35.5) && (pm25 <= 55.4)) {
        aqi = ((49/20)*(pm25-35.3))+101;
      } else if ((pm25>55.5) && (pm25 <= 150.4)) {
        aqi = ((49/94.9)*(pm25-55.5))+151;
      }
    
      aqifloor=Math.round(aqi);

      console.log(pm25);
    
      $('.aqi').append(aqifloor);

    });

/* Weather conditions js */

var city = "San Francisco";

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=7568515c86637d3b269c029ce8b3cdf9#", function(data){
 console.log(data);

var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
var temp = Math.floor(data.main.temp);
var weather = data.weather[0].main;

$('.icon').attr('src', icon);
$('.city').append(city);
$('.weather').append(weather);
$('.temp').append(temp);

/* console.log(icon); */

});