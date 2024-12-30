window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
}
})

const button = document.querySelector('#botonip');

button.addEventListener('click', () => {
    navigator.clipboard.writeText('play.godhelmmc.com');
    button.innerHTML = 'Copiado en el portapapeles!';

    setTimeout(() => {
        button.innerHTML = 'Copiar la IP';
    }, 3000)
})

const button2 = document.querySelector('#botonbedrock')

button2.addEventListener('click', () => {
    window.location.href = 'minecraft://?addExternalServer=Godhelm|bedrock.godhelmmc.com:19187';
})

const serverIp = "play.godhelmmc.com";
const statusElement = document.getElementById("status");

async function fetchServerStatus() {
  try {
    const response = await fetch(`https://api.mcstatus.io/v2/status/java/${serverIp}`);
    const data = await response.json();

    if (data.online) {
      statusElement.textContent = `${data.players.online}/${data.players.max}`;
      statusElement.classList.add("online");
    } else {
      statusElement.textContent = "El servidor no está en linea..";
      //statusElement.classList.add("error");
    }
  } catch (error) {
    statusElement.textContent = "0";
    //statusElement.classList.add("error");
  }
}

fetchServerStatus();