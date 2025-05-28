/**
 * Script para controle do modo escuro
 * Implementa alternância de tema e persistência da escolha do usuário
 */

document.addEventListener('DOMContentLoaded', function() {
  // Elementos
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  
  // Verifica se há preferência salva no localStorage
  const darkMode = localStorage.getItem('darkMode');
  
  // Aplica o modo escuro se estiver salvo
  if (darkMode === 'enabled') {
    enableDarkMode();
  }
  
  // Adiciona evento de clique ao botão de alternância
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      // Verifica o estado atual
      if (body.classList.contains('dark-mode')) {
        disableDarkMode();
      } else {
        enableDarkMode();
      }
    });
  }
  
  // Função para ativar o modo escuro
  function enableDarkMode() {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
  }
  
  // Função para desativar o modo escuro
  function disableDarkMode() {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
  }
  
  // Detecta preferência do sistema (opcional)
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Se não houver preferência salva, usa a preferência do sistema
  if (!darkMode) {
    if (prefersDarkScheme.matches) {
      enableDarkMode();
    }
  }
  
  // Atualiza quando a preferência do sistema mudar
  prefersDarkScheme.addEventListener('change', function(e) {
    if (!localStorage.getItem('darkMode')) {
      if (e.matches) {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    }
  });
});
