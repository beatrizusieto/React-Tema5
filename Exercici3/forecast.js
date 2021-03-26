async function forecast() {
    
    const ciudad = "Barcelona";
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=5f11195bb15930c99e51a9aa1b81fad3');
    const data = await response.json();
    let posicionPagina2 = document.getElementById("tiempoDevuelto");
  
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    weather = data.weather[0].description;
    posicionPagina2.innerHTML = `Today: ${weather}`;
    
    
  }
