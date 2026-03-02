function copiarPix() {
  const pix = document.getElementById("pixCode").innerText;

  navigator.clipboard.writeText(pix)
    .then(() => {
      alert("Chave Pix copiada com sucesso!");
    })
    .catch(() => {
      alert("Não foi possível copiar. Copie manualmente.");
    });
}

// CONTADOR REGRESSIVO
const weddingDate = new Date("April 20, 2026 19:00:00").getTime();

const countdownFunction = setInterval(function() {

  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML = "É hoje! 🤍";
  }

}, 1000);

// COPIAR PIX - UX PROFISSIONAL
const copyBtn = document.getElementById("copyPixBtn");
const pixCode = document.getElementById("pixCode");

copyBtn.addEventListener("click", function () {

  navigator.clipboard.writeText(pixCode.innerText).then(() => {

    copyBtn.innerText = "Copiado! ✓";
    copyBtn.classList.add("success");

    setTimeout(() => {
      copyBtn.innerText = "Copiar chave Pix";
      copyBtn.classList.remove("success");
    }, 2500);

  }).catch(() => {

    copyBtn.innerText = "Erro ao copiar";
    copyBtn.classList.add("error");

    setTimeout(() => {
      copyBtn.innerText = "Copiar chave Pix";
      copyBtn.classList.remove("error");
    }, 2500);

  });

});