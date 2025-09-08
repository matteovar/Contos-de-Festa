document.querySelectorAll(".box").forEach((box) => {
  const themes = {
    boy: [
      { img: "assets/boy_theme.svg", title: "Tema de urso" },
      { img: "assets/boy_theme2.png", title: "Tema de carros" },
      { img: "assets/boy_theme3.png", title: "Tema de dinossauro" },
    ],
    neutral: [
      { img: "assets/neutral_theme.svg", title: "Tema de urso" },
      { img: "assets/neutral_theme2.png", title: "Tema de natureza" },
      { img: "assets/neutral_theme3.png", title: "Tema de animais" },
    ],
    girl: [
      { img: "assets/girl_theme.svg", title: "Tema de princesa" },
      { img: "assets/girl_theme2.png", title: "Tema de flores" },
      { img: "assets/girl_theme3.png", title: "Tema de unicórnio" },
    ],
  };

  const themeType = box.dataset.theme;
  const themeData = themes[themeType];
  let currentIndex = 0;

  const imgElement = box.querySelector("figure img:not(.btn img)");
  const titleElement = box.querySelector("h3");

  box.querySelector(".btn-left").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + themeData.length) % themeData.length;
    updateTheme();
  });

  box.querySelector(".btn-right").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % themeData.length;
    updateTheme();
  });

  function updateTheme() {
    imgElement.src = themeData[currentIndex].img;
    titleElement.textContent = themeData[currentIndex].title;
  }
});

// Funcionalidade do formulário
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Previne o envio padrão do formulário
    
    // Cria o overlay escuro
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    
    // Cria o modal 3D
    const modal = document.createElement('div');
    modal.className = 'modal-3d';
    modal.innerHTML = `
      <div class="modal-content">
        <div class="success-icon">✓</div>
        <h2>Agendamento confirmado com sucesso!</h2>
        <p>Em breve, nossa equipe entrará em contato para conhecer mais detalhes sobre sua festa. Agradecemos por escolher nossos serviços e estamos à disposição para tornar seu evento ainda mais especial.</p>
        <button class="close-modal-btn">Fechar</button>
      </div>
    `;
    
    // Adiciona o overlay e modal ao body
    document.body.appendChild(overlay);
    document.body.appendChild(modal);
    
    // Adiciona classes para animação
    setTimeout(() => {
      overlay.classList.add('show');
      modal.classList.add('show');
    }, 10);
    
    // Função para fechar o modal
    function closeModal() {
      overlay.classList.remove('show');
      modal.classList.remove('show');
      
      setTimeout(() => {
        document.body.removeChild(overlay);
        document.body.removeChild(modal);
      }, 300);
    }
    
    // Event listeners para fechar
    modal.querySelector('.close-modal-btn').addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
  });
});
