
function random()
{
   const numero = (Math.random() * 100).toFixed();
   
   if( (numero%2) == 0)
   {
    fetchChiste();
   }
   else{
    fetchChiste2();
   }
}

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

  async function fetchChiste2() {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    let posicionPagina = document.getElementById("chisteDevuelto");
  
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    chiste = data.value;
    posicionPagina.innerHTML = `${chiste}`;
   
  }

  
  
  