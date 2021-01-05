window.addEventListener('load', () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}https://api.openweathermap.org/data/2.5/weather?lat={${lat}}&lon={${long}}&appid={4c904cde9536b550f6c533d7e33f8296}`

      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
        })
    });

  } else {
    h1.textContent = "Please enable location services"
  }
});
