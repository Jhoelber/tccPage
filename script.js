window.sr= ScrollReveal({reset:true});

sr.reveal('.imagemBackground', {
    rotate: {x: 30, y:0, z:0},
    duration: 1000,
    distance:'50px'

});



sr.reveal('.tituloFacilidades', {
    rotate: {x: 0, y:20, z:0},
    duration: 2000,
    distance:'20px'

});
sr.reveal('.fraseDentroGrid', {
    rotate: {x: 0, y:40, z:0},
    duration: 1500,
    distance:'90px'

});
sr.reveal('.imagemDentroGRID', {
    rotate: {x: 0, y:40, z:0},
    duration: 1000,
    distance:'90px'

});




function applyHoverEffect(element, newText) {
    const originalText = element.textContent;
    

    element.addEventListener('mouseover', function () {
        element.style.transition = "opacity 0.5s ease-out";
        element.style.opacity = "0";
        setTimeout(function () {
            element.style.transition = "opacity 0.5s ease-in";
            element.style.opacity = "1";
            element.classList.add('hidden');
            element.textContent = newText;
            element.classList.remove('hidden');
        }, 100);
    });

    element.addEventListener('mouseout', function () {
        element.style.transition = "opacity 0.5s ease-out";
        element.style.opacity = "0";
        setTimeout(function () {
            element.textContent = originalText;
            element.style.transition = "opacity 0.5s ease-in";
            element.style.opacity = "1";
        }, 100);
    });
}

const textPre1 = document.getElementById('textoPre1');
applyHoverEffect(textPre1, "Mesmo que avisado sobre o horário o passageiro não está no local? Essa problemática pode acontecer rotineiramente atrasando seu percurso e o nosso aplicativo veio com a proposta de reduzir esse problema com notificações e funções para alertar o usuário.");

const textPre2 = document.getElementById('textoPre2');
applyHoverEffect(textPre2, "Imagine a seguinte situação: Você faz uma corrida com 14 passageiros e cada um deles atrasa 2 minutos, você acaba de acrescentar 28 minutos a mais no seu destino final, se isso ocorre com frequencia voce gastara 728 minutos, sendo 12hrs a mais com seu veiculo ligado, gastando mais combustível e reduzindo a vida util das peças.");


const textPre3 = document.getElementById('textoPre3');
applyHoverEffect(textPre3, "Todo diferencial conta e poder proporcionar comodidades ao seu cliente é um diferencial muito grande e para isso poderá contar conosco, nossas funções iram auxiliar no seu dia dia e do seu cliente.");

window.addEventListener('scroll', function() {
    var image = document.getElementById('hiddenImage');
    var imagePosition = image.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
  
    if (imagePosition < windowHeight) {
      image.classList.add('visible');
    }
  });

  const containerImagem = document.getElementById('container-imagem');
  const mensagem = document.getElementById('mensagem');
  
  containerImagem.addEventListener('mouseover', () => {
      mensagem.style.display = 'block';
  });
  
  containerImagem.addEventListener('mouseout', () => {
      mensagem.style.display = 'none';
  });

 
