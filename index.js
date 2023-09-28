window.addEventListener('DOMContentLoaded', function() {
    var textElement = document.querySelector('.fade-in-fade-out');
    var texts = ['Praveen Kumar Ranga',  'Backend Developer'];
    var currentTextIndex = 0;
  
    function changeText() {
      textElement.textContent = texts[currentTextIndex];
      currentTextIndex = (currentTextIndex + 1) % texts.length;
    }
    changeText();
    setInterval(changeText, 3000);
  });

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-list");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })

  document.querySelectorAll(".nav-link").forEach(n => 
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }))