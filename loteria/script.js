document.getElementById('btnStart').addEventListener('click', () => {
    let numInicial = parseInt(document.getElementById('ingresarNumberInicial').value);
    let numFinal = parseInt(document.getElementById('ingresarNumberFinal').value);

    if (isNaN(numInicial) || isNaN(numFinal) || numInicial >= numFinal) {
        console.log('Ingresa un número válido');
        return;
    }

    let numeroAleatorio = Math.floor(Math.random() * (numFinal - numInicial + 1)) + numInicial;
    let numeroFormateado = numeroAleatorio.toLocaleString('en-US');
    document.getElementById('resultado').innerText = numeroFormateado;

    let emojiRisa = "🎉";
    let cantidadEmojis = 65;
    let emojiContainer = document.getElementById('emojiContainer');

    emojiContainer.innerHTML = '';

    for (let i = 0; i < cantidadEmojis; i++) {
        let emoji = document.createElement('div');
        emoji.classList.add('emoji');
        emoji.innerText = emojiRisa;
        emoji.style.left = `${Math.random() * 100}vw`;
        emoji.style.top = `${Math.random() * 100}vh`;
        emoji.style.fontSize = '2rem';
        emojiContainer.appendChild(emoji);
    }

    gsap.fromTo('.emoji', 
        { 
            scale: 0.5, 
            opacity: 0 
        }, 
        { 
            scale: 1.5, 
            opacity: 1, 
            duration: 1, 
            stagger: 0.1, 
            onComplete: () => gsap.to('.emoji', { 
                duration: 5, y: '100vh', opacity: 0 
            }) 
        } 
    );
});
