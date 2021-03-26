
async function fetchChiste() {
    const response = await fetch('https://icanhazdadjoke.com/slack');
    const data = await response.json();
    let posicionPagina = document.getElementById("chisteDevuelto");
  
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    chiste = data.attachments[0].text;
    posicionPagina.innerHTML = `${chiste}`;
  }

  
  
  