const apiKey = 'b5262da7f6ed266c41dde2d04a1742e4'; 


function getWeather() {
  const city = document.getElementById("cityInput").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appid=${apiKey}`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("Ville non trouvée");
      return response.json();
    })
    .then(data => {
      const result = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>Température:</strong> ${data.main.temp} °C</p>
        <p><strong>Description:</strong> ${data.weather[0].description}</p>
      `;
      document.getElementById("weatherResult").innerHTML = result;
    })
    .catch(err => {
      document.getElementById("weatherResult").innerHTML = `<p style="color: red">Erreur : ${err.message}</p>`;
    });
}
