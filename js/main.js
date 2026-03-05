document.addEventListener("DOMContentLoaded", () => {

  // Анимация цифр
  function animateValue(id, start, end, duration) {
    let obj = document.getElementById(id);
    if (!obj) return;
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let timer = setInterval(function () {
      current += increment;
      obj.textContent = current;
      if (current === end) clearInterval(timer);
    }, stepTime);
  }

  animateValue("vehicles", 0, 340, 2000);
  animateValue("avgDelay", 0, 18, 2000);

});