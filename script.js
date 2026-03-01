const weddingDate = new Date("April 20, 2026 19:00:00").getTime();

const countdown = setInterval(function() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);

  document.getElementById("countdown").innerHTML =
    days + " dias e " + hours + " horas";

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "É hoje 🤍";
  }
}, 1000);