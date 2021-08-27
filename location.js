        //const x = document.getElementById("location");

		function getLocation() {
		  try {
			navigator.geolocation.getCurrentPosition(showPosition);
		  } catch {
			document.getElementById("location").innerHTML = err;
		  }
		}

		function showPosition(position) {
            document.getElementById("location").innerHTML = "Latitude: " + position.coords.latitude + 
		  "<br>Longitude: " + position.coords.longitude;
		}