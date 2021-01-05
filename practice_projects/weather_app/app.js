window.addEventListener('load', () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(".temperature-description");
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=4c904cde9536b550f6c533d7e33f8296`

      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
          const { temp } = data.main;
          const summary = data.weather[0].description

          //Set DOM Elements from the API
          temperatureDegree.textContent = temp;
          temperatureDescription.textContent = summary;
          locationTimezone.textContent = data.name
        })
    });

  } else {
    h1.textContent = "Please enable location services"
  }
});
