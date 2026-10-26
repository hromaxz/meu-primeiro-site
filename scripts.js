const botao = document.getElementById("meuBotao");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function () {
  mensagem.textContent = "Parabéns! Seu JavaScript está funcionando!";

  botao.textContent = "Você conseguiu!";
});
