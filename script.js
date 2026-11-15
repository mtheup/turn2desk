// simples: coloca o ano atual no rodapé
(function() {
  var y = document.getElementById('year');
  if (y) {
    y.textContent = new Date().getFullYear();
  }
})();
