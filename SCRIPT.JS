function googleTranslateElementInit() {
              new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL}, 'google_translate_element');
           }
              navigator.geolocation.getCurrentPosition(function(position) {

                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    const altitude = position.coords.altitude;
                    const accuracy = position.coords.accuracy;
                    const altitudeAccuracy = position.coords.altitudeAccuracy;
                    const heading = position.coords.height;
                    const speed = position.coords.speed;
                    const timestamp = position.timestamp;

                    // work with this information however you'd like!
                });
              function locationSuccess(position) {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    const altitude = position.coords.altitude;
                    const accuracy = position.coords.accuracy;
                    const altitudeAccuracy = position.coords.altitudeAccuracy;
                    const heading = position.coords.height;
                    const speed = position.coords.speed;
                    const timestamp = position.timestamp;
                    getweather(latitude, longitude);
                    // work with this information however you'd like!
                }

                function locationError(error) {
                    const code = error.code;
                    const message = error.message;
                    // read the code and message and decide how you want to handle this!
                    document.getElementById('result1').innerHTML = message;
                }

                navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
            function getweather(latitude, longitude){
            const key = "b6d519e586c07037125dafb81f9e3fa3";
            const link = "https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&units=metric&apikey="+key+"&lang="+localStorage.lang;
            let request = new XMLHttpRequest();
            request.open('GET', link);
            request.responseType = 'json';
            request.send();
            request.onload = function() {
              const data = request.response;
              showweather(data)
            }};
            function showweather(obj) {
              	var date = new Date(obj.dt * 1000);
	     // Hours part from the timestamp
            var hours = date.getHours();
            // Minutes part from the timestamp
            var minutes = "0" + date.getMinutes();
            // Seconds part from the timestamp
            var seconds = "0" + date.getSeconds();
            var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

              const weather = obj['weather'];
              var mt = obj.main.temp_min;
		var tempg = obj.main.temp
              for (let i = 0; i < weather.length; i++) {
                var icon = weather[i].icon;
                document.getElementById("temp").innerHTML = obj.main.temp+"°C";
 		
		document.getElementById("humidity").innerHTML = obj.main.humidity+"%";
                document.getElementById("description").innerHTML = weather[i].description;
                
                document.getElementById("mintemp").innerHTML = mt+"°C";
                document.getElementById("maxtemp").innerHTML = obj.main.temp_max+"°C";
                document.getElementById("wspdg").innerHTML = obj.wind.speed+"MPH | "+obj.wind.deg+"°";
                document.getElementById("pressure").innerHTML = obj.main.pressure +" hPa";
		document.getElementById("clouds").innerHTML = obj.clouds.all +" %";
                document.getElementById("city").innerHTML = obj.name;
		document.getElementById("date").innerHTML = date;
		var tempf = obj.main.temp*1.8+32;
		document.getElementById("tempf").innerHTML = tempf.toFixed(2)+"°F";
		iconshow(icon, tempg)
		
		
		 }
            };
            function iconshow(icon,tempg) {
                        var img = new Image();
                        img.src ='https://openweathermap.org/img/wn/'+icon+'@2x.png';
                        img.style.width = "60px";
                        img.style.height = "60px";
                        document.getElementById('icon').appendChild(img);
                        if (tempg>=17){
                        document.getElementById("result").innerHTML="The weather is hot. Drink some water";}
		    	else if(tempg<=15){
                        document.getElementById("result").innerHTML="The weather is cold. Wear some warm clothes.";}
			else {
			document.getElementById("result").innerHTML="The weather is great!";}	    
	    };
//autoload page
		 //   function load()
//{
//setTimeout("window.open(self.location, '_self');", 300000);
//}
