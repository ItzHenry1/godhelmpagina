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