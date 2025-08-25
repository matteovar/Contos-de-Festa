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
