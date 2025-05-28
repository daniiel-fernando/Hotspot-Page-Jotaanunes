/**
 * Script principal para a página de hotspot com carrossel fade
 * Versão moderna sem dependência de jQuery
 */

document.addEventListener('DOMContentLoaded', function() {
  // Configuração do carrossel com efeito fade
  const slides = document.querySelectorAll('.carousel-slide');
  let currentIndex = 0;
  const totalSlides = slides.length;
  const intervalTime = 10000; // 10 segundos entre slides
  let intervalId;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  }

  // Inicializa o carrossel
  showSlide(currentIndex);

  // Função para resetar o intervalo automático quando o usuário interage
  function resetInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, intervalTime);
  }

  // Start do autoplay
  intervalId = setInterval(nextSlide, intervalTime);

  // Adiciona evento de clique em cada slide para avançar
  const carousel = document.getElementById('carousel');
  if (carousel) {
    carousel.addEventListener('click', function() {
      nextSlide();
      resetInterval();
    });
  }

  // Suporte a gestos de toque para dispositivos móveis
  let touchStartX = null;
  let touchEndX = null;

  function handleGesture() {
    if (touchEndX === null || touchStartX === null) return;
    const swipeDistance = touchEndX - touchStartX;

    // Sensibilidade do swipe (mínimo 30px)
    if (Math.abs(swipeDistance) > 30) {
      if (swipeDistance > 0) {
        // Swipe para direita -> slide anterior
        prevSlide();
      } else {
        // Swipe para esquerda -> slide próximo
        nextSlide();
      }
      resetInterval();
    }

    touchStartX = null;
    touchEndX = null;
  }

  if (carousel) {
    carousel.addEventListener('touchstart', function(e) {
      touchStartX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchmove', function(e) {
      touchEndX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchend', function() {
      handleGesture();
    });
  }
  
  // Contador regressivo para redirecionamento (quando autenticado)
  const timerSpan = document.getElementById('redirect-timer');
  const manualBtn = document.getElementById('manual-access');
  
  if (timerSpan && manualBtn) {
    let seconds = 5;
    
    const countdown = setInterval(() => {
      seconds--;
      
      if (seconds >= 0) {
        timerSpan.textContent = seconds;
        
        // Reinicia a animação a cada segundo
        timerSpan.classList.remove('pulse');
        void timerSpan.offsetWidth; // Força reflow para reiniciar a animação
        timerSpan.classList.add('pulse');
      } else {
        clearInterval(countdown);
        
        // Mostra o botão de acesso manual
        manualBtn.style.display = 'inline-block';
        
        // Foca no botão para melhor acessibilidade
        manualBtn.focus();
      }
    }, 1000);
  }
  
  // Melhoria de acessibilidade para o formulário
  const acceptTermsCheckbox = document.getElementById('acceptTerms');
  const submitButton = document.querySelector('button[type="submit"]');
  
  if (acceptTermsCheckbox && submitButton) {
    // Destaca visualmente o botão quando os termos são aceitos
    acceptTermsCheckbox.addEventListener('change', function() {
      if (this.checked) {
        submitButton.classList.add('btn-pulse');
      } else {
        submitButton.classList.remove('btn-pulse');
      }
    });
  }
});
